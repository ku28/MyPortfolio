const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { email, message } = req.body;

  // Validation
  if (!email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email and message are required' 
    });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  // Mail options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'kushagrajuneja7@gmail.com',
    subject: 'Portfolio Enquiry',
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #23ce6b; border-bottom: 2px solid #23ce6b; padding-bottom: 10px;">New Portfolio Enquiry</h2>
          
          <div style="margin: 20px 0;">
            <p style="color: #555; margin: 10px 0;"><strong style="color: #333;">From:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #888; font-size: 12px; text-align: center;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      </div>
    `,
    text: `
New Portfolio Enquiry

From: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log(`Email sent successfully from ${email}`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
