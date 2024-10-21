import Image from "next/image";
interface BotonDesplegableTypes{
  onClick:()=>void;
  mostrarInfo:boolean;
}
export default function BotonDesplegable({onClick,mostrarInfo}:BotonDesplegableTypes) {
  return (
    <button onClick={onClick}>
      <Image
        src={mostrarInfo ? "/chevronUp.svg" : "/chevronDown.svg"}
        alt="Icono Flecha"
        title="Icono Flecha"
        width={30}
        height={30}
        layout="fixed"
        data-geolocalization="-32.87194646008121, -68.82772021189432"
      />
    </button>
  );
}
