import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1ses!2ses!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Girolan"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default GoogleMap;