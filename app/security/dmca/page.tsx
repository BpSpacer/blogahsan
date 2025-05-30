import React from 'react';

const DMCA = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">DMCA Policy</h1>
        
        <p className="text-lg mb-6">
          At <strong>AdsbyAhsan</strong>, we respect the intellectual property rights of others. If you believe that your copyrighted work has been infringed upon, please notify us in accordance with the Digital Millennium Copyright Act (DMCA). 
        </p>

        <h2 className="text-3xl font-semibold mb-4">Notification of Infringement</h2>
        <p className="text-lg mb-6">
          To file a notice of infringement, please provide us with the following information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Your contact information:</strong> Name, address, phone number, and email address.</li>
          <li><strong>Identification of the copyrighted work:</strong> A description of the work you believe is infringed.</li>
          <li><strong>Location of the infringing material:</strong> A description of where the infringing material is located on our site (URL).</li>
          <li><strong>Statement of good faith:</strong> A statement that you believe in good faith that the use of the material is not authorized by the copyright owner.</li>
          <li><strong>Certification of accuracy:</strong> A statement that the information provided in your notice is accurate, under penalty of perjury.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Send Notification</h2>
        <p className="text-lg mb-6">
          Please send your DMCA notice to our designated agent:
        </p>
        <p className="text-lg mb-6">
          <strong>AdsbyAhsan</strong><br />
          [Your Name or Company Name] <br />
          [Your Address] <br />
          Email: [Your Email Address] <br />
          Phone: [Your Phone Number] 
        </p>

        <h2 className="text-3xl font-semibold mb-4">Counter Notification</h2>
        <p className="text-lg mb-6">
          If you believe that your material was removed by mistake, you may file a counter notification by providing us with the following information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Your contact information:</strong> Name, address, phone number, and email address.</li>
          <li><strong>Identification of the material:</strong> A description of the material that was removed.</li>
          <li><strong>Statement of good faith:</strong> A statement that you believe in good faith that the material was removed due to a mistake or misidentification.</li>
          <li><strong>Certification of accuracy:</strong> A statement that the information provided in your counter notification is accurate, under penalty of perjury.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Send Counter Notification</h2>
        <p className="text-lg mb-6">
          Please send your counter notification to our designated agent at the contact information provided above.
        </p>

        <p className="text-lg mb-6">
          We will respond to any valid DMCA notices and take appropriate action in accordance with the law. 
        </p>

        <p className="text-lg text-center">
          <strong>Thank you for your cooperation in protecting intellectual property!</strong>
        </p>
      </div>
    </div>
  );
};

export default DMCA;