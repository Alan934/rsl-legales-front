type DetallesServicios = {
  id: number;
  detalle: string;
};

interface DropdownSummaryTypes {
  titulo: string;
  detalles:DetallesServicios[]
}
export default function DropdownSummary({
  titulo,
  detalles
}: DropdownSummaryTypes) {
  return (
    <details className="p-3 bg-white rounded cursor-pointer">
      <summary className="text-lg md:text-xl lg:text-2xl font-semibold">{titulo}</summary>
      {detalles.map((detalle)=>(
        <p key={detalle.id} className="text-base md:text-lg lg:text-xl">{detalle.detalle}</p>
      ))}
    </details>
  );
}
