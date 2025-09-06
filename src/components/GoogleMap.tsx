import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.5602725172907!2d-1.9736319233834552!3d43.30559087484334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a5653e31588d%3A0x89c310f935448e1f!2sGIROLAN%20S.L.%20%7C%20Aire%20acondicionado%20en%20Gipuzkoa!5e1!3m2!1ses!2ses!4v1757140048745!5m2!1ses!2ses"
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