import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    /* 1️⃣ Email to ADMIN (Professional Notification) */
    await transporter.sendMail({
      from: `"Veena Naturals Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact: ${subject || "Website Inquiry"}`,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f9f9f9; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
        .header { background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .header .subtitle { opacity: 0.9; font-size: 14px; margin-top: 8px; }
        .content { padding: 30px; }
        .details-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 25px 0; }
        .detail-item { background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #2e7d32; }
        .detail-label { font-weight: 600; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .detail-value { color: #222; font-size: 15px; }
        .message-box { background: #fff8e1; border: 1px solid #ffd54f; border-radius: 8px; padding: 20px; margin: 25px 0; }
        .message-label { font-weight: 600; color: #e65100; margin-bottom: 10px; font-size: 14px; }
        .message-content { color: #5d4037; white-space: pre-line; line-height: 1.7; }
        .timestamp { background: #e8f5e9; padding: 12px; border-radius: 6px; text-align: center; font-size: 13px; color: #2e7d32; margin: 25px 0; }
        .action-btn { display: inline-block; background: #2e7d32; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-top: 10px; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; color: #666; font-size: 13px; border-top: 1px solid #eee; }
        .badge { display: inline-block; background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500; margin-left: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <div class="subtitle">Website Inquiry | Veena Naturals</div>
        </div>
        
        <div class="content">
            <div class="timestamp">
                ⏰ Received: ${timestamp}
            </div>
            
            <div class="details-grid">
                <div class="detail-item">
                    <div class="detail-label">Name</div>
                    <div class="detail-value">${name}</div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-label">Email Address</div>
                    <div class="detail-value">
                        <a href="mailto:${email}" style="color: #2e7d32; text-decoration: none;">${email}</a>
                        <span class="badge">Reply To</span>
                    </div>
                </div>
                
                ${subject ? `
                <div class="detail-item">
                    <div class="detail-label">Subject</div>
                    <div class="detail-value">${subject}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="message-box">
                <div class="message-label">📝 Customer Message:</div>
                <div class="message-content">${message.replace(/\n/g, "<br/>")}</div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="action-btn">✉️ Reply to Customer</a>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was automatically generated from the Veena Naturals website contact form.</p>
            <p style="margin-top: 8px; font-size: 12px; color: #888;">Do not reply to this automated email. Use the reply button above.</p>
        </div>
    </div>
</body>
</html>
      `,
    });

    /* 2️⃣ Auto-reply to CUSTOMER (Professional Template) */
    await transporter.sendMail({
      from: `"Veena Naturals" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting Veena Naturals!`,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Veena Naturals</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
        .header { background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); color: white; padding: 40px 30px; text-align: center; }
        .logo { font-size: 32px; margin-bottom: 10px; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header .subtitle { opacity: 0.9; font-size: 16px; margin-top: 12px; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #2e7d32; margin-bottom: 25px; }
        .message-box { background: #f8f9fa; border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #2e7d32; }
        .message-label { font-weight: 600; color: #2e7d32; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center; gap: 8px; }
        .message-content { color: #444; line-height: 1.8; white-space: pre-line; }
        .next-steps { background: #e8f5e9; padding: 25px; border-radius: 8px; margin: 30px 0; }
        .next-steps h3 { color: #2e7d32; margin-top: 0; font-size: 18px; }
        .next-steps ul { margin: 15px 0; padding-left: 20px; }
        .next-steps li { margin-bottom: 10px; }
        .contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0; }
        .contact-item { text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; }
        .contact-icon { font-size: 24px; margin-bottom: 10px; }
        .contact-label { font-weight: 600; color: #555; font-size: 14px; margin-bottom: 5px; }
        .contact-value { color: #2e7d32; font-size: 16px; }
        .signature { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; }
        .signature-name { font-weight: 600; color: #2e7d32; font-size: 18px; }
        .signature-title { color: #666; font-size: 14px; margin-top: 4px; }
        .footer { background: #f5f5f5; padding: 25px; text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; }
        .social-links { margin: 20px 0; }
        .social-links a { display: inline-block; margin: 0 10px; color: #2e7d32; text-decoration: none; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🌿</div>
            <h1>Thank You for Contacting Us</h1>
            <div class="subtitle">Your Natural Beauty Journey Starts Here</div>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear <strong>${name}</strong>,
            </div>
            
            <p>Thank you for reaching out to <strong>Veena Naturals</strong>. We appreciate you taking the time to connect with us about natural, organic wellness solutions.</p>
            
            <div class="message-box">
                <div class="message-label">
                    <span>📋 Your Message:</span>
                </div>
                <div class="message-content">${message.replace(/\n/g, "<br/>")}</div>
            </div>
            
            <p>We have successfully received your inquiry and our customer care team is reviewing it. You can expect a personalized response within <strong>24-48 hours</strong>.</p>
            
            <div class="next-steps">
                <h3>📅 What Happens Next?</h3>
                <ul>
                    <li>Our specialists will review your inquiry</li>
                    <li>You'll receive a personalized response via email</li>
                    <li>We may follow up with additional information or questions</li>
                    <li>You can always reply to this email for updates</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div class="contact-label">Email</div>
                    <div class="contact-value">veenanaturals.herbal@gmail.com</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div class="contact-label">Phone</div>
                    <div class="contact-value">+91 99521 55108</div>
                </div>
            </div>
            
            <div class="signature">
                <div class="signature-name">Veena Naturals Team</div>
                <div class="signature-title">Pure. Organic. Natural.</div>
                <p style="margin-top: 15px; color: #666;">
                    "Bringing nature's best to your doorstep with care and authenticity."
                </p>
            </div>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="https://www.instagram.com/veenanaturals.herbal/">Instagram</a>
                <!-- Add more social links as needed -->
            </div>
            <p>© ${new Date().getFullYear()} Veena Naturals. All rights reserved.</p>
            <p style="font-size: 12px; margin-top: 10px; color: #888;">
                This is an automated email. Please do not reply directly to this message.
            </p>
        </div>
    </div>
</body>
</html>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { 
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}