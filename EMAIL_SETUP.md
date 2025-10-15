# Email Integration Setup Guide

This guide will help you set up email functionality for your contact form so that service requests are sent directly to your email.

## Option 1: EmailJS (Recommended - Easy Setup)

EmailJS is a client-side email service that doesn't require a backend server.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account
   - Create a new service (Gmail, Outlook, etc.)

2. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

3. **Configure EmailJS**
   - In your EmailJS dashboard, create an email template
   - Copy your Service ID, Template ID, and Public Key
   - Update `src/lib/emailService.ts` with your credentials

4. **Update the email service**
   - Uncomment the EmailJS code in `src/lib/emailService.ts`
   - Replace the placeholder values with your actual credentials

## Option 2: Formspree (Simple Form Handling)

Formspree is a form backend service that handles form submissions.

### Setup Steps:

1. **Create Formspree Account**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for a free account
   - Create a new form

2. **Update the email service**
   - Uncomment the Formspree code in `src/lib/emailService.ts`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID

## Option 3: Custom Backend API

If you have your own backend server, you can create an API endpoint to handle form submissions.

### Setup Steps:

1. **Create API Endpoint**
   - Create a POST endpoint at `/api/service-request`
   - Handle the form data and send emails using your preferred email service (Nodemailer, SendGrid, etc.)

2. **Update the email service**
   - Uncomment the custom API code in `src/lib/emailService.ts`
   - Update the endpoint URL if needed

## Email Template

The form will send a structured email with all the customer information:

```
New Service Request from [Customer Name]

CONTACT INFORMATION:
Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]

VEHICLE INFORMATION:
Make: [Vehicle Make]
Model: [Vehicle Model]
Year: [Vehicle Year]
VIN: [VIN Number]
Mileage: [Current Mileage]
Commercial Vehicle: [Yes/No]
Under Warranty: [Yes/No]

SERVICE REQUEST:
Service Needed: [Selected Service]
Urgency: [Routine/Urgent/Emergency]
Preferred Date: [Preferred Date]
Preferred Time: [Preferred Time]
Emergency Service: [Yes/No]

MESSAGE:
[Customer's detailed message]

---
This request was submitted through the Jonas Auto & Truck website contact form.
Submitted at: [Timestamp]
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the service request
4. Verify all information is correctly formatted

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Emails not received**: Verify email service configuration
- **Spam folder**: Check your spam/junk folder for emails
- **Rate limiting**: Some services have rate limits on free plans

## Security Notes

- Never expose API keys in client-side code
- Use environment variables for sensitive configuration
- Consider implementing rate limiting to prevent spam
- Validate form data on both client and server side
