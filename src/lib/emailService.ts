// Email service utility for sending form submissions
// You can integrate with services like EmailJS, Formspree, or your own backend

import { EMAIL_CONFIG } from './emailConfig';

export interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicleInfo: string;
  urgency: string;
  preferredDate: string;
  message: string;
}

export const sendServiceRequest = async (data: ServiceRequest): Promise<boolean> => {
  try {
    // Validate EmailJS configuration
    if (!EMAIL_CONFIG.SERVICE_ID || !EMAIL_CONFIG.TEMPLATE_ID || !EMAIL_CONFIG.PUBLIC_KEY) {
      console.error('EmailJS configuration is missing. Please configure EMAIL_CONFIG.');
      return false;
    }

    // EmailJS Integration
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      service: data.service,
      vehicle_info: data.vehicleInfo,
      urgency: data.urgency,
      preferred_date: data.preferredDate || 'Not specified',
      message: data.message,
      submitted_at: new Date().toLocaleString(),
    };

    const result = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    
    // Check if the request was successful
    if (result.status === 200 || result.status === 201) {
      return true;
    }
    
    console.error('EmailJS returned non-success status:', result.status);
    return false;

  } catch (error) {
    // Log error for debugging (in production, consider sending to error tracking service)
    console.error('Error sending service request:', error);
    return false;
  }
};

// Email template for reference
export const generateEmailContent = (data: ServiceRequest): string => {
  return `
New Service Request from ${data.name}

CONTACT INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

VEHICLE INFORMATION:
Vehicle: ${data.vehicleInfo}

SERVICE REQUEST:
Service Needed: ${data.service}
Urgency: ${data.urgency}
Preferred Date: ${data.preferredDate || 'Not specified'}

MESSAGE:
${data.message}

---
This request was submitted through the Jonas Auto & Truck website contact form.
Submitted at: ${new Date().toLocaleString()}
  `;
};
