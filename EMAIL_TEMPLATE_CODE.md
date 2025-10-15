# 📧 EmailJS Template Code

Copy and paste this code into your EmailJS template editor.

## Template Settings

**Template Name:** `Service Request Template`

**Subject:** 
```
New Service Request from {{from_name}} - {{service}}
```

## Email Body Code

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
      🚗 New Service Request
    </h1>
    <p style="color: #fef2f2; margin: 5px 0 0 0; font-size: 14px;">
      Jonas Auto & Truck Service
    </p>
  </div>

  <!-- Content -->
  <div style="padding: 30px;">
    
    <!-- Customer Info -->
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
      <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
        📞 Contact Information
      </h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
          <strong style="color: #374151; font-size: 14px;">Name:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{from_name}}</span>
        </div>
        <div>
          <strong style="color: #374151; font-size: 14px;">Phone:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{phone}}</span>
        </div>
        <div style="grid-column: 1 / -1;">
          <strong style="color: #374151; font-size: 14px;">Email:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{from_email}}</span>
        </div>
      </div>
    </div>

    <!-- Service Details -->
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
      <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
        🔧 Service Request
      </h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
          <strong style="color: #374151; font-size: 14px;">Service Needed:</strong><br>
          <span style="color: #1f2937; font-size: 16px; font-weight: 600;">{{service}}</span>
        </div>
        <div>
          <strong style="color: #374151; font-size: 14px;">Urgency:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{urgency}}</span>
        </div>
        <div>
          <strong style="color: #374151; font-size: 14px;">Vehicle:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{vehicle_info}}</span>
        </div>
        <div>
          <strong style="color: #374151; font-size: 14px;">Preferred Date:</strong><br>
          <span style="color: #1f2937; font-size: 16px;">{{preferred_date}}</span>
        </div>
      </div>
    </div>

    <!-- Message -->
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
      <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
        💬 Customer Message
      </h2>
      <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #dc2626;">
        <p style="margin: 0; color: #1f2937; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">{{message}}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 12px; margin: 0;">
        This request was submitted through the Jonas Auto & Truck website contact form.<br>
        Submitted at: {{submitted_at}}
      </p>
      <div style="margin-top: 15px;">
        <a href="tel:403-123-4567" style="display: inline-block; background-color: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 5px;">
          📞 Call Customer
        </a>
        <a href="mailto:{{from_email}}" style="display: inline-block; background-color: #374151; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 5px;">
          ✉️ Reply by Email
        </a>
      </div>
    </div>

  </div>
</div>
```

## Template Variables Used

Make sure these variables are available in your EmailJS template:

- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{service}}` - Service requested
- `{{vehicle_info}}` - Vehicle information
- `{{urgency}}` - Urgency level
- `{{preferred_date}}` - Preferred appointment date
- `{{message}}` - Customer's message
- `{{submitted_at}}` - Submission timestamp

## How to Use This Template

1. **Go to your EmailJS dashboard**
2. **Click "Email Templates"**
3. **Click "Create New Template"**
4. **Paste the subject line** in the Subject field
5. **Paste the HTML code** in the Email Body field
6. **Save the template**
7. **Copy the Template ID** for your configuration

## Template Features

✅ **Professional Design** - Clean, branded appearance
✅ **Responsive Layout** - Works on all email clients
✅ **Color Coded Sections** - Easy to read and process
✅ **Action Buttons** - Quick call and email links
✅ **Branded Header** - Shows your business name
✅ **Organized Information** - Clear sections for different data
✅ **Mobile Friendly** - Looks great on phones and tablets

This template will create beautiful, professional emails that are easy to read and act upon!
