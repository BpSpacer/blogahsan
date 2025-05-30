import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <p className="text-lg mb-6">
          At <strong>AdsbyAhsan</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or engage with our services. By using our site, you consent to the data practices described in this policy.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-lg mb-6">
          We collect information about you through various means, including:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Personal Data:</strong> Information such as your name, email address, phone number, and shipping address that you provide when registering or participating in site activities.</li>
          <li><strong>Derivative Data:</strong> Data automatically collected by our servers, including your IP address, browser type, operating system, access times, and pages viewed.</li>
          <li><strong>Financial Data:</strong> Payment information collected during transactions, such as credit card details, which are processed securely.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Use of Your Information</h2>
        <p className="text-lg mb-6">
          We utilize the information collected about you for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Creating and managing your account.</li>
          <li>Processing transactions and sending confirmations or invoices.</li>
          <li>Responding to customer service inquiries.</li>
          <li>Sending marketing communications and updates.</li>
          <li>Monitoring usage to enhance your site experience.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Disclosure of Your Information</h2>
        <p className="text-lg mb-6">
          Your information may be shared in the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Legal Requirements:</strong> To comply with laws, respond to legal requests, or protect rights and safety.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties who assist us in providing our services, including payment processing and data analysis.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Tracking Technologies</h2>
        <p className="text-lg mb-6">
          We use cookies and similar tracking technologies to enhance your experience on our site. You may choose to accept or decline cookies, but this may impact site functionality.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Google AdSense</h2>
        <p className="text-lg mb-6">
          We use Google AdSense to display ads on our website. Google may use cookies to serve ads based on your previous visits. You can opt out of personalized advertising by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600">Google Ads Settings</a>. For additional options, you may also visit the <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600">Network Advertising Initiative</a>.
        </p>

        <h2 className="text-3xl font-semibold mb-4">User Consent</h2>
        <p className="text-lg mb-6">
          By using our website, you consent to our Privacy Policy. You may withdraw your consent at any time by contacting us or adjusting your cookie settings.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Third-Party Websites</h2>
        <p className="text-lg mb-6">
          Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites, and we recommend reviewing their privacy policies.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Security of Your Information</h2>
        <p className="text-lg mb-6">
          We implement various security measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Policy for Children</h2>
        <p className="text-lg mb-6">
          We do not knowingly collect information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="text-lg mb-6">
          We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of any significant changes by posting the updated policy on this page.
        </p>

        <p className="text-lg mb-6">
          You are encouraged to review this Privacy Policy regularly for any updates. Changes take effect upon posting on this page.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">
          If you have any questions or comments regarding this Privacy Policy, please contact us at <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a>.
        </p>

        <p className="text-lg text-center">
          <strong>Thank you for trusting AdsbyAhsan with your information!</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;