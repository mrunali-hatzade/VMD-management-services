import { NextResponse } from 'next/server';

/**
 * Meta WhatsApp Cloud API Webhook Endpoint
 * Documentation: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks
 */

// GET endpoint: Handles Webhook Verification Challenge from Meta Developer Console
export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const verifyToken = process.env.META_WHATSAPP_VERIFY_TOKEN || process.env.WHATSAPP_VERIFY_TOKEN || 'vmd_whatsapp_webhook_secret';

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('✅ Meta WhatsApp Webhook verified successfully!');
    return new Response(challenge, { status: 200 });
  } else {
    console.error('❌ Meta WhatsApp Webhook verification failed. Token mismatch.');
    return new Response('Forbidden', { status: 403 });
  }
}

// POST endpoint: Listens for incoming WhatsApp messages & status notifications from Meta
export async function POST(request) {
  try {
    const body = await request.json();

    console.log('📩 Incoming Meta WhatsApp Webhook Payload:', JSON.stringify(body, null, 2));

    // Process entry & changes from Meta Webhook payload
    if (body.object === 'whatsapp_business_account' && body.entry) {
      for (const entry of body.entry) {
        for (const change of entry.changes || []) {
          const value = change.value;
          
          // 1. Incoming Messages
          if (value?.messages) {
            for (const msg of value.messages) {
              const fromNumber = msg.from;
              const msgType = msg.type;
              const textBody = msg.text?.body || '';

              console.log(`💬 Incoming message from [${fromNumber}] (${msgType}):`, textBody);
              
              // Custom handling for incoming messages can be added here
            }
          }

          // 2. Message Delivery / Read Status Updates
          if (value?.statuses) {
            for (const status of value.statuses) {
              console.log(`📊 Message status update for ID [${status.id}]: ${status.status} (recipient: ${status.recipient_id})`);
            }
          }
        }
      }
    }

    // Meta requires an immediate 200 OK response to acknowledge receipt
    return NextResponse.json({ status: 'EVENT_RECEIVED' }, { status: 200 });
  } catch (error) {
    console.error('❌ Error handling Meta WhatsApp Webhook POST:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
