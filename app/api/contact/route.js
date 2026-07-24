import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('📬 Contact inquiry received:');
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}`);

    // Dispatch WhatsApp Alert via Official WhatsApp Business Cloud API
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
              name: "vmd_contact_alert",
              language: {
                code: "en_US"
              },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: name },
                    { type: "text", text: email },
                    { type: "text", text: phone },
                    { type: "text", text: service },
                    { type: "text", text: message }
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
        } else {
          console.log('✅ WhatsApp notification dispatched successfully');
        }
      } catch (err) {
        console.error('Error sending WhatsApp via Meta API:', err.message);
      }
    } else {
      console.warn('⚠️ WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID is missing. Skipping WhatsApp dispatch.');
    }

    return NextResponse.json({ 
      success: true, 
      whatsappDispatched,
      message: 'Contact inquiry processed.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
