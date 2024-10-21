"use client";

import { lexend } from "@/fonts/fonts";
import { useEffect, useState } from "react";

interface CounterProps {
  valor: number;
  duration: number;
  subtexto: string;
  fecha: string;
}

export default function ContadorAnimado({ valor, duration, subtexto, fecha }: CounterProps){
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * valor);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [valor, duration]);

  return (
    <div
      className={`size-28 md:size-44 lg:size-52 rounded-full flex items-center ${lexend.className} antialiased`}
      style={{ background: "#0024901A" }}
    >
      <div className="w-full h-fit text-center text-wrap px-2 text-xs md:text-lg lg:text-xl">
        <div>
          <span>mas de</span>
          <h2>
            <strong className="text-sm md:text-xl lg:text-3xl">{count}</strong>
          </h2>
          <span>{subtexto}</span>
        </div>
        <div style={{ color: "#464646" }}>{fecha}</div>
      </div>
    </div>
  );
};
