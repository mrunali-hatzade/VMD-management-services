import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, experience, position, address, notes } = body;

    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'simplifiedworks.official@gmail.com';

    console.log('📬 Dispatched background application details:');
    console.log(`Candidate Name: ${fullName}, Applied Position: ${position}, Experience: ${experience}`);

    let emailDispatched = false;
    let emailError = null;

    // 1. Dispatch Email via Web3Forms (Primary)
    if (web3formsAccessKey) {
      try {
        const w3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            subject: `New VMD Job Application: ${fullName} (${position})`,
            from_name: 'VMD Careers',
            fullName: fullName,
            email: email,
            phone: phone,
            experience: experience,
            position: position,
            address: address,
            notes: notes || 'N/A',
            replyto: email
          })
        });

        const w3Data = await w3Res.json();
        emailDispatched = w3Data.success;
        if (!w3Data.success) {
          emailError = w3Data;
          console.error('❌ Web3Forms Error (Careers):', w3Data);
        } else {
          console.log('✅ Career email dispatched successfully via Web3Forms');
        }
      } catch (err) {
        console.error('Error sending email via Web3Forms:', err.message);
      }
    }

    // 2. Resend API Fallback
    if (!emailDispatched && resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'VMD Careers <onboarding@resend.dev>',
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
          emailError = await resendRes.json();
          console.error('❌ Resend API Error (Careers):', JSON.stringify(emailError, null, 2));
        } else {
          console.log(`✅ Resend career email dispatched successfully to ${contactEmail}`);
        }
      } catch (err) {
        console.error('Error sending email via Resend API:', err.message);
      }
    }

    if (!emailDispatched && !web3formsAccessKey && !resendApiKey) {
      console.warn('⚠️ WEB3FORMS_ACCESS_KEY or RESEND_API_KEY is missing in environment variables.');
    }

    // 3. Dispatch WhatsApp Alert via Official WhatsApp Business Cloud API
    let whatsappDispatched = false;
    const whatsappAccessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const whatsappPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const targetPhone = process.env.ADMIN_WHATSAPP_TO || '919767355347';

    if (whatsappAccessToken && whatsappPhoneNumberId) {
      try {
        const cleanPhone = targetPhone.replace(/[^0-9]/g, '');

        const metaUrl = `https://graph.facebook.com/v18.0/${whatsappPhoneNumberId}/messages`;
        const metaRes = await fetch(metaUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${whatsappAccessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: cleanPhone,
            type: "template",
            template: {
              name: "vmd_careers_alert",
              language: {
                code: "en_US"
              },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: fullName },
                    { type: "text", text: phone },
                    { type: "text", text: email },
                    { type: "text", text: experience },
                    { type: "text", text: position },
                    { type: "text", text: address },
                    { type: "text", text: notes }
                  ]
                }
              ]
            }
          })
        });

        whatsappDispatched = metaRes.ok;
        if (!metaRes.ok) {
          const errData = await metaRes.json();
          console.error('Meta WhatsApp API Error Details:', errData);
        }
      } catch (err) {
        console.error('Error sending WhatsApp via Meta API:', err.message);
      }
    }

    return NextResponse.json({ 
      success: true, 
      emailDispatched,
      whatsappDispatched,
      emailError,
      message: 'Application dispatch attempted.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
