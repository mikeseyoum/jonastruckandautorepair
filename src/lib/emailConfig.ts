// EmailJS configuration
// In production, these values should be set via environment variables
// For Vercel: Add them in Project Settings > Environment Variables

export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_9qn5lt6', 
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_qfguy7h', 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'agcXe2mPbIdLCq-Sa', 
};
