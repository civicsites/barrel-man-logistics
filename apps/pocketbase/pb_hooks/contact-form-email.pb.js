/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const message = e.record.get("message");
  
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>Submission ID: ${e.record.id}</small></p>
  `;
  
  const mailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "barrelmanlogistics@outlook.com" }],
    subject: "New Contact Form Submission from " + name,
    html: htmlBody
  });
  
  $app.newMailClient().send(mailMessage);
  e.next();
}, "contact_submissions");