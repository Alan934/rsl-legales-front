import { getFechaHoy } from "@/app/utils/getFechaHoy";
import {
  useGetContratosQuery,
  useGetFirmasQuery,
  useGetUsuariosQuery,
} from "@/app/redux/services/contadorApi";
import ContadorAnimado from "./ContadorAnimado";

export default function ContadorFirmasContainer() {
  const fechaHoy = getFechaHoy();
  const {
    data: clientes,
    isLoading: clienteLoading,
    error: errorCliente,
  } = useGetUsuariosQuery();
  const {
    data: firmas,
    isLoading: firmasLoading,
    error: errorFirmas,
  } = useGetFirmasQuery();
  const {
    data: contratos,
    isLoading: contratosLoading,
    error: errorContratos,
  } = useGetContratosQuery();

  if (clienteLoading || firmasLoading || contratosLoading) {
    return (
      <div className="flex justify-around items-center my-10">
        <ContadorAnimado
          valor={0}
          subtexto="clientes"
          duration={1000}
          fecha={fechaHoy}
        />
        <ContadorAnimado
          valor={0}
          subtexto="firmas registradas"
          duration={1000}
          fecha={fechaHoy}
        />
        <ContadorAnimado
          valor={0}
          subtexto="contratos realizados"
          duration={1000}
          fecha={fechaHoy}
        />
      </div>
    );
  }
  if (errorCliente || errorContratos || errorFirmas) {
    return (
      <div className="font-bold text-2xl items-center flex justify-center">
        Ocurrio un error en el fetching de datos!
      </div>
    );
  }
  return (
    <div className="flex justify-around items-center my-10">
      <ContadorAnimado
        valor={clientes!}
        subtexto="clientes"
        duration={4000}
        fecha={fechaHoy}
      />
      <ContadorAnimado
        valor={firmas!}
        subtexto="firmas registradas"
        duration={4000}
        fecha={fechaHoy}
      />
      <ContadorAnimado
        valor={contratos!}
        subtexto="contratos realizados"
        duration={4000}
        fecha={fechaHoy}
      />
    </div>
  );
}
