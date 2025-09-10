import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_yrskowl", // Gmail, Outlook etc.
  TEMPLATE_ID: "template_2g8fq0j", // Template you create in EmailJS
  PUBLIC_KEY: "3xd1VyeW9RbKVVGor", // Your EmailJS public key
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @param {string} formData.phone - Phone number (optional)
 * @param {string} formData.subject - Email subject (optional)
 * @returns {Promise} - EmailJS promise
 */
export const sendEmail = async (formData) => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone || "Not provided",
      subject: formData.subject || "Contact Form Submission",
      to_email: "shuvankor001@gmail.com", // Your email where you want to receive messages
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

/**
 * Initialize EmailJS (call this once in your app)
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Export config for easy access
export { EMAILJS_CONFIG };
