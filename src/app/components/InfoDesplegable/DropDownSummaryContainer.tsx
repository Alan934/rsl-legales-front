import { useGetServiciosQuery } from "@/app/redux/services/serviciosApi";
import DropdownSummary from "./DropdownSummary";

export default function DropdownSummaryContainer() {
  const { data: servicios, isLoading, error } = useGetServiciosQuery();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="font-bold text-xl">
          Cargando los servicios...
        </span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center">
        <span className="font-bold text-xl">
          Ocurrio un error al cargar los servicios!
        </span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-3/4 py-2 space-y-4">
        {servicios?.map((servicio, index) => (
          <DropdownSummary
            key={index}
            titulo={servicio.nombreServicio}
            detalles={servicio.detalleServicio}
          />
        ))}
      </div>
    </div>
  );
}
