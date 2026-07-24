import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, experience, position, address, notes } = body;

    // Load credentials from environment variables
    const formspreeFormId = process.env.FORMSPREE_FORM_ID;
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886'; // Default Twilio Sandbox
    const adminTo = process.env.ADMIN_WHATSAPP_TO || 'whatsapp:+919767355347';

    console.log('📬 Dispatched background application details:');
    console.log(`Candidate Name: ${fullName}, Applied Position: ${position}, Experience: ${experience}`);

    // 1. Dispatch Email via Formspree if FORMSPREE_FORM_ID is provided
    let formspreeDispatched = false;
    if (formspreeFormId) {
      try {
        const formspreeRes = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            experience,
            position,
            address,
            notes,
            _to: 'mrunalithatzade20@gmail.com'
          })
        });
        formspreeDispatched = formspreeRes.ok;
      } catch (err) {
        console.error('Error forwarding to Formspree:', err.message);
      }
    } else {
      console.warn('⚠️ FORMSPREE_FORM_ID is missing in environment variables. Skipping real email dispatch.');
    }

    // 2. Dispatch WhatsApp Alert via Twilio if Credentials are provided
    let twilioDispatched = false;
    if (twilioAccountSid && twilioAuthToken) {
      try {
        const waText = `New Job Application:\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Experience:* ${experience}\n*Position:* ${position}\n*Address:* ${address}\n*Notes:* ${notes}`;
        
        const params = new URLSearchParams();
        params.append('From', twilioFrom);
        params.append('To', adminTo);
        params.append('Body', waText);

        const authHeader = 'Basic ' + Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');
        const twilioRes = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: params.toString()
        });

        twilioDispatched = twilioRes.ok;
      } catch (err) {
        console.error('Error sending WhatsApp via Twilio:', err.message);
      }
    } else {
      console.warn('⚠️ TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN is missing in environment variables. Skipping real WhatsApp dispatch.');
    }

    return NextResponse.json({ 
      success: true, 
      formspreeDispatched,
      twilioDispatched,
      message: 'Application dispatch attempted.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
