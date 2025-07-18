import { useEffect, useState } from "react";

export function HeartRain() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // de 0% a 100%
        top: Math.random() * 100,  // de 0% a 100%
        size: Math.random() * 24 + 16, // entre 16 y 40px
        duration: Math.random() * 5 + 5, // 5s a 10s
        delay: Math.random() * 3,
        rotate: Math.random() * 360,
        zIndex: Math.random() > 0.5 ? 10 : 40, // alterna entre detrás y encima
      };
      setHearts(prev => [...prev, newHeart]);

      // eliminar corazones viejos
      setHearts(prev => prev.filter(h => Date.now() - h.id < 15000));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="absolute animate-heart-bubble"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            transform: `rotate(${heart.rotate}deg)`,
            zIndex: heart.zIndex,
            opacity: 0.9,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
