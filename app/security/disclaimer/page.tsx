import React from 'react';

const Disclaimer = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Disclaimer</h1>
        <p className="text-lg mb-6">
          The information provided on <strong>AdsbyAhsan</strong> is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>
        <p className="text-lg mb-6">
          <strong>AdsbyAhsan</strong> may contain links to external websites that are not provided or maintained by or in any way affiliated with AdsbyAhsan. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>
        <p className="text-lg mb-6">
          We are not responsible for any technical issues or losses that may arise from the use of our content, advice, or third-party links. The tutorials, tips, and recommendations on this site are based on personal experiences and research, and individual results may vary. Always use caution when following any advice or recommendations provided.
        </p>
        <p className="text-lg mb-6">
          By using <strong>AdsbyAhsan</strong>, you agree that under no circumstances will AdsbyAhsan be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>
        <p className="text-lg mb-6">
          For any further questions regarding this disclaimer, please feel free to <a href="/contact" className="underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;