const CONTACT_EMAIL = process.env.CONTACT_EMAIL_TO || 'barrelmanlogistics@outlook.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 5000;

function sanitize(value) {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateSubmission(body) {
  const errors = [];

  if (body._gotcha) {
    return { spam: true, errors: [] };
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const serviceType = sanitize(body.serviceType);
  const message = sanitize(body.message);

  if (!name) errors.push('Name is required.');
  if (!email) errors.push('Email is required.');
  else if (!EMAIL_REGEX.test(email)) errors.push('Email format is invalid.');
  if (!phone) errors.push('Phone is required.');
  if (!serviceType) errors.push('Service type is required.');
  if (!message) errors.push('Project details are required.');

  if (name.length > 200) errors.push('Name is too long.');
  if (email.length > 320) errors.push('Email is too long.');
  if (phone.length > 50) errors.push('Phone is too long.');
  if (serviceType.length > 200) errors.push('Service type is too long.');
  if (message.length > MAX_FIELD_LENGTH) errors.push('Project details are too long.');

  return {
    spam: false,
    errors,
    data: { name, email, phone, serviceType, message },
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Missing RESEND_API_KEY or RESEND_FROM_EMAIL environment variables.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const validation = validateSubmission(req.body || {});

  if (validation.spam) {
    return res.status(200).json({ success: true });
  }

  if (validation.errors.length > 0) {
    return res.status(400).json({ error: validation.errors[0], errors: validation.errors });
  }

  const { name, email, phone, serviceType, message } = validation.data;
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Service Type:</strong> ${escapeHtml(serviceType)}</p>
    <p><strong>Project Details:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New Quote Request from ${name}`,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Resend API error:', response.status, errorBody);
      return res.status(502).json({ error: 'Failed to send your message. Please try again or call us directly.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again or call us directly.' });
  }
}
