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
    
    return result.status === 200;

    // Option 2: Formspree Integration
    // Uncomment and configure with your Formspree endpoint
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        vehicle_make: data.vehicleMake,
        vehicle_model: data.vehicleModel,
        vehicle_year: data.vehicleYear,
        vin: data.vin,
        mileage: data.mileage,
        urgency: data.urgency,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        message: data.message,
        is_commercial: data.isCommercial,
        has_warranty: data.hasWarranty,
        is_emergency: data.isEmergency,
      }),
    });
    
    return response.ok;
    */

    // Option 3: Your own backend API
    // Uncomment and configure with your backend endpoint
    /*
    const response = await fetch('/api/service-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return response.ok;
    */

    // For now, simulate successful submission
    console.log('Service request data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;

  } catch (error) {
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
Make: ${data.vehicleMake}
Model: ${data.vehicleModel}
Year: ${data.vehicleYear}
VIN: ${data.vin || 'Not provided'}
Mileage: ${data.mileage || 'Not provided'}
Commercial Vehicle: ${data.isCommercial ? 'Yes' : 'No'}
Under Warranty: ${data.hasWarranty ? 'Yes' : 'No'}

SERVICE REQUEST:
Service Needed: ${data.service}
Urgency: ${data.urgency}
Preferred Date: ${data.preferredDate || 'Not specified'}
Preferred Time: ${data.preferredTime || 'Not specified'}
Emergency Service: ${data.isEmergency ? 'Yes' : 'No'}

MESSAGE:
${data.message}

---
This request was submitted through the Jonas Auto & Truck website contact form.
Submitted at: ${new Date().toLocaleString()}
  `;
};
