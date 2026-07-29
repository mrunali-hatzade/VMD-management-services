import { NextResponse } from 'next/server';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, experience, position, address, notes } = body;

    console.log('📬 Career application received for server processing:');
    console.log(`Candidate: ${fullName}, Position: ${position}, Experience: ${experience}`);

    // =========================================================================
    // 1. RESEND EMAIL DISPATCH (ACTIVE WITH VERIFIED DOMAIN / RESEND_API_KEY)
    // =========================================================================
    let emailDispatched = false;
    let resendError = null;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'simplifiedworks.official@gmail.com';
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'VMD Careers <onboarding@resend.dev>';

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
            subject: `New VMD Job Application: ${fullName} (${position})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #002B49; border-bottom: 2px solid #D4A52C; padding-bottom: 8px;">New VMD Job Application</h2>
                <p><strong>Candidate Name:</strong> ${fullName}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Applied Position:</strong> ${position}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Additional Notes:</strong></p>
                <blockquote style="background: #f8fafc; padding: 12px; border-left: 4px solid #D4A52C; margin: 0;">${notes || 'N/A'}</blockquote>
              </div>
            `
          })
        });

        emailDispatched = resendRes.ok;
        if (!resendRes.ok) {
          resendError = await resendRes.json();
          console.error('❌ Resend API Error (Careers):', JSON.stringify(resendError, null, 2));
        } else {
          console.log(`✅ Resend career email sent successfully from [${resendFromEmail}] to [${contactEmail}]`);
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
    // 3. META WHATSAPP CLOUD API DISPATCH (ACTIVE)
    // =========================================================================
    let whatsappDispatched = false;
    let whatsappError = null;
    const adminPhone = process.env.ADMIN_WHATSAPP_TO || '+918799859129';

    const whatsappBody = [
      `📋 *New VMD Job Application*`,
      ``,
      `👤 *Candidate:* ${fullName}`,
      `📞 *Phone:* ${phone}`,
      `📧 *Email:* ${email}`,
      `💼 *Experience:* ${experience}`,
      `🏷️ *Position:* ${position}`,
      `📍 *Address:* ${address}`,
      ``,
      `📝 *Notes:*`,
      `${notes || 'N/A'}`
    ].join('\n');

    const waResult = await sendWhatsAppMessage({
      to: adminPhone,
      message: whatsappBody
    });

    whatsappDispatched = waResult.success;
    if (!waResult.success) {
      whatsappError = waResult.error;
    }

    return NextResponse.json({ 
      success: true, 
      emailDispatched,
      pabblyDispatched,
      whatsappDispatched,
      whatsappError,
      resendError,
      message: 'Application processed successfully.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
