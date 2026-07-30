/**
 * Meta WhatsApp Cloud API Helper
 * Documentation: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages
 */

export function sanitizeWhatsAppText(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/[\r\n]+/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export async function sendWhatsAppMessage({ to, message, templateName, templateLanguage = 'en_US', templateComponents = [] }) {
  const token = process.env.META_WHATSAPP_ACCESS_TOKEN || process.env.WHATSAPP_CLOUD_API_TOKEN;
  const phoneId = process.env.META_WHATSAPP_PHONE_ID || process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneId) {
    console.warn('⚠️ Meta WhatsApp Cloud API credentials missing (META_WHATSAPP_ACCESS_TOKEN or META_WHATSAPP_PHONE_ID not set).');
    return { 
      success: false, 
      error: 'Meta WhatsApp credentials missing' 
    };
  }

  // Format recipient phone number: E.164 digits without leading '+' or spaces
  let recipientPhone = (to || '').replace(/[^0-9]/g, '');

  // Default to India country code 91 if a 10-digit mobile number is provided
  if (recipientPhone.length === 10) {
    recipientPhone = `91${recipientPhone}`;
  }

  if (!recipientPhone) {
    console.error('❌ Meta WhatsApp dispatch failed: Invalid recipient phone number.');
    return { 
      success: false, 
      error: 'Invalid recipient phone number' 
    };
  }

  // Construct Meta Graph API endpoint URL
  const apiVersion = process.env.META_WHATSAPP_API_VERSION || 'v21.0';
  const url = `https://graph.facebook.com/${apiVersion}/${phoneId}/messages`;

  // Build payload (Template message or Freeform text message)
  let payload;

  if (templateName) {
    const sanitizedComponents = templateComponents.map(component => {
      if (component.parameters) {
        return {
          ...component,
          parameters: component.parameters.map(param => {
            if (param.type === 'text') {
              return { ...param, text: sanitizeWhatsAppText(param.text) };
            }
            return param;
          })
        };
      }
      return component;
    });

    payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: recipientPhone,
      type: 'template',
      template: {
        name: templateName,
        language: { code: templateLanguage },
        components: sanitizedComponents
      }
    };
  } else {
    payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: recipientPhone,
      type: 'text',
      text: {
        preview_url: false,
        body: message
      }
    };
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('--- WhatsApp Cloud API Payload Debug ---');
    console.log(JSON.stringify(payload, null, 2));
    console.log('----------------------------------------');
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok && !data.error) {
      const messageId = data.messages?.[0]?.id || 'N/A';
      if (templateName) {
        console.log(`✅ Meta WhatsApp template accepted`);
        console.log(`Recipient: [${recipientPhone}]`);
        console.log(`Template: ${templateName}`);
        console.log(`Message ID: [${messageId}]`);
      } else {
        console.log(`✅ Meta WhatsApp message dispatched successfully to [${recipientPhone}]. Message ID: [${messageId}]`);
      }
      return { 
        success: true, 
        messageId, 
        data 
      };
    } else {
      const errorMsg = data.error?.message || `HTTP ${res.status} ${res.statusText}`;
      const errorCode = data.error?.code || res.status;
      const errorDetails = data.error?.error_data?.details || '';
      console.error(`❌ Meta WhatsApp Cloud API Error (HTTP ${res.status}):`);
      console.error(`  Code: ${errorCode}`);
      console.error(`  Message: ${errorMsg}`);
      if (errorDetails) {
        console.error(`  Details: ${errorDetails}`);
      }
      return { 
        success: false, 
        error: errorMsg, 
        errorCode, 
        data 
      };
    }
  } catch (err) {
    console.error('❌ Exception sending WhatsApp via Meta Cloud API:', err.message);
    return { 
      success: false, 
      error: err.message 
    };
  }
}
