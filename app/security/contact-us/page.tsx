import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Contact AdsbyAhsan</h1>
        <p className="text-lg mb-6 text-center">
          We are always here to help! Whether you have questions about tech, blogging, or just need some advice, don’t hesitate to get in touch. Your feedback and inquiries are important to us.
        </p>

        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Email Us</h2>
            <p className="text-lg">
              <strong>Email:</strong> <a href="mailto:adsbyahsan@gmail.com" className="text-blue-600">adsbyahsan@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2">Join Our WhatsApp Group</h2>
            <p className="text-lg">
              If you need quick help, join our WhatsApp group where we discuss tech tips, tricks, and tutorials.
            </p>
            <p className="text-lg">
              <strong>WhatsApp Group:</strong> <a href="your-whatsapp-link" target="_blank" className="text-blue-600">Click here to join</a>
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2">Stay Connected</h2>
            <p className="text-lg">
              At AdsbyAhsan, we’re passionate about building a community of tech enthusiasts. We believe that sharing knowledge is the key to success, and we are excited to be part of your journey. Whether you’re looking for advice, tips, or a conversation, we’re just an email or message away.
            </p>
            <p className="text-lg">
              Thank you for being a part of the AdsbyAhsan community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;