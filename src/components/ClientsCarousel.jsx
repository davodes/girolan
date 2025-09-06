import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default function ClientsCarousel({ clients }) {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    // Creamos el slider
    sliderInstance.current = new KeenSlider(sliderRef.current, {
      loop: true,
      spacing: 24,
      slides: { perView: 5 },
      drag: true, // permite arrastrar manualmente
    });

    // Función de autoplay fluido
    let timeout;
    const next = () => {
      sliderInstance.current.next();
      timeout = setTimeout(next, 2000); // mueve slide cada 2s
    };
    next();

    return () => {
      clearTimeout(timeout);
      sliderInstance.current.destroy();
    };
  }, []);

  // Duplicamos los logos para el loop infinito visual
  const marqueeClients = [...clients, ...clients];

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden cursor-grab">
      {marqueeClients.map((client, i) => (
        <div
          key={i}
          className="keen-slider__slide flex justify-center items-center p-6"
        >
          <div className="flex items-center justify-center">
            <img
              src={client.svg}
              alt={client.name}
              className="h-16 object-contain imagen"
            />
          </div>
        </div>
      ))}
    </div>
  );
}