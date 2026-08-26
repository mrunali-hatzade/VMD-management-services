import { NextResponse } from 'next/server';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('📬 Contact inquiry received for server processing:');
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}`);

    // =========================================================================
    // 1. RESEND EMAIL DISPATCH (ACTIVE WITH VERIFIED DOMAIN / RESEND_API_KEY)
    // =========================================================================
    let emailDispatched = false;
    let resendError = null;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'simplifiedworks.official@gmail.com';
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'VMD Contact <onboarding@resend.dev>';

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: resendFromEmail,
            to: [contactEmail],
            reply_to: email,
            subject: `New VMD Contact Inquiry: ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #002B49; border-bottom: 2px solid #D4A52C; padding-bottom: 8px;">New VMD Contact Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service Requested:</strong> ${service}</p>
                <p><strong>Requirement Details:</strong></p>
                <blockquote style="background: #f8fafc; padding: 12px; border-left: 4px solid #D4A52C; margin: 0;">${message}</blockquote>
              </div>
            `
          })
        });

        emailDispatched = resendRes.ok;
        if (!resendRes.ok) {
          resendError = await resendRes.json();
          console.error('❌ Resend API Error:', JSON.stringify(resendError, null, 2));
        } else {
          console.log(`✅ Resend email sent successfully from [${resendFromEmail}] to [${contactEmail}]`);
        }
      } catch (err) {
        console.error('Error sending email via Resend API:', err.message);
      }
    }

    // =========================================================================
    // 2. PABBLY CONNECT WEBHOOK TRIGGER (COMMENTED OUT)
    // =========================================================================
    let pabblyDispatched = false;

    // =========================================================================
    // 3. META WHATSAPP CLOUD API DISPATCH (TEMPLATE: vmd_contact_details)
    // =========================================================================
    let whatsappDispatched = false;
    let whatsappError = null;
    const adminPhone = process.env.ADMIN_WHATSAPP_TO;

    if (!adminPhone) {
      console.warn('⚠️ ADMIN_WHATSAPP_TO missing in environment variables. Skipping WhatsApp notification.');
    } else {
      const waResult = await sendWhatsAppMessage({
        to: adminPhone,
        templateName: 'vmd_contact_details',
        templateLanguage: 'en_US',
        templateComponents: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: String(name || '')
              },
              {
                type: 'text',
                text: String(email || '')
              },
              {
                type: 'text',
                text: String(phone || '')
              },
              {
                type: 'text',
                text: String(service || '')
              },
              {
                type: 'text',
                text: String(message || '')
              }
            ]
          }
        ]
      });

      whatsappDispatched = waResult.success;
      if (!waResult.success) {
        whatsappError = waResult.error;
      }
    }

    const overallSuccess = emailDispatched || whatsappDispatched;

    return NextResponse.json({ 
      success: overallSuccess, 
      emailDispatched,
      pabblyDispatched,
      whatsappDispatched,
      whatsappError,
      resendError,
      message: overallSuccess ? 'Contact inquiry processed successfully.' : 'Failed to send admin notifications.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
