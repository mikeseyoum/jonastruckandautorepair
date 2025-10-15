# 📧 Email Integration Setup Guide for Jonas Auto & Truck

This guide will help you set up email functionality so that service requests from your website are sent directly to your business email.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

### Step 2: Add Your Email Service
1. In your EmailJS dashboard, click **"Add New Service"**
2. Choose **Gmail** (or your preferred email provider)
3. Connect your business email account (where you want to receive service requests)
4. **Copy your Service ID** (looks like: `service_abc123`)
service_9qn5lt6
### Step 3: Create Email Template
1. Go to **"Email Templates"** in your EmailJS dashboard
2. Click **"Create New Template"**
3. Use this exact template:

**Template Name:** `Service Request Template`

**Subject:** `New Service Request from {{from_name}} - {{service}}`

**Email Body:**
```
New Service Request from {{from_name}}

CONTACT INFORMATION:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

SERVICE REQUEST:
Service Needed: {{service}}
Vehicle: {{vehicle_info}}
Urgency: {{urgency}}
Preferred Date: {{preferred_date}}

MESSAGE:
{{message}}

---
This request was submitted through the Jonas Auto & Truck website contact form.
Submitted at: {{submitted_at}}
```

4. **Save the template** and **copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `user_abc123def456`)



### Step 5: Update Your Website Configuration
1. Open the file: `src/lib/emailConfig.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here', 
  PUBLIC_KEY: 'your_actual_public_key_here',
};
```

### Step 6: Test the Integration
1. Go to your website's contact page
2. Fill out the service request form
3. Submit the form
4. Check your email for the service request

## 📧 What You'll Receive

When customers submit the form, you'll get professional emails like this:

```
Subject: New Service Request from John Smith - Heavy Equipment Repair

New Service Request from John Smith

CONTACT INFORMATION:
Name: John Smith
Email: john@example.com
Phone: (403) 555-0123

SERVICE REQUEST:
Service Needed: Heavy Equipment Repair
Vehicle: 2020 Ford F-150
Urgency: Urgent (3-5 days)
Preferred Date: 2024-01-15

MESSAGE:
My truck is making strange noises and the engine light is on. 
I need it checked as soon as possible for my business operations.

---
This request was submitted through the Jonas Auto & Truck website contact form.
Submitted at: 1/10/2024, 2:30:15 PM
```



### Emails Not Being Sent
- Check that all credentials are correct in `emailConfig.ts`
- Verify your EmailJS service is active
- Check your email's spam folder
- Look at browser console for error messages

### Form Not Submitting
- Make sure all required fields are filled
- Check that EmailJS package is installed: `npm install @emailjs/browser`
- Verify your internet connection

### Wrong Email Format
- Check your EmailJS template matches the format above
- Make sure all template variables are spelled correctly
- Test with a simple template first

## 📞 Support

If you need help:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Contact EmailJS support through their website
3. Make sure your email service is properly connected

## 🎯 Benefits

Once set up, you'll receive:
- ✅ **Professional service request emails** with all customer details
- ✅ **Vehicle information** for accurate service planning
- ✅ **Urgency levels** for proper prioritization
- ✅ **Contact information** for easy follow-up
- ✅ **Service details** to prepare for the appointment

Your customers can now easily book appointments online, and you'll receive all the information you need to provide excellent service!
