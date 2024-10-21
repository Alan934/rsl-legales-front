"use client";
import { useRef, useState } from "react";
import BotonDesplegable from "./BotonDesplegable";

type respuestaList={
  id:number;
  respuesta:string;
}

interface AcordeonItemTypes{
  titulo:string;
  descripcion:string;
  lista:respuestaList[];
}

export default function InfoDesplegableContainer({titulo,descripcion,lista}:AcordeonItemTypes) {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div
      onClick={toggleMostrarInfo}
      className="max-w-2xl mx-auto my-4 md:max-w-5xl border shadow rounded cursor-pointer bg-white py-4"
    >
      <div className="flex items-center justify-between mx-8 md:mx-4">
        <p className="text-lg font-normal text-black ">{titulo}</p>
        <BotonDesplegable
          onClick={toggleMostrarInfo}
          mostrarInfo={mostrarInfo}
        />
      </div>

      <div
        ref={contentRef}
        className="transition-height duracion-300 ease-in-out overflow-hidden mx-8 md:mx-4"
        style={{
          height: mostrarInfo ? `${contentRef.current?.scrollHeight}px` : `0px`,
          opacity: mostrarInfo ? "1" : "0",
        }}
      >
        <div className="w-auto mt-2 text-slate-950 sm:text-xs md:text-sm font-normal leading-none text-wrap space-y-2">
          <p>{descripcion}</p>
          <ul className="list-disc px-5 space-y-2">
              {lista.map((item)=>(
                <li key={item.id}>{item.respuesta}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
