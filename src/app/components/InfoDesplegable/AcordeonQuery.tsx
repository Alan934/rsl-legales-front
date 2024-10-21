import { useGetDataFaqQuery } from "@/app/redux/services/faqApi";
import AcordeonContainer from "./AcordeonContainer";
import AcordeonItem from "./AcordeonItem";

export default function AcordeonQuery() {
  const { data: preguntas, isLoading, error } = useGetDataFaqQuery();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="font-bold text-xl">Cargando Preguntas...</span>
      </div>
    );
  }
  if (error) {
    <div className="flex justify-center items-center">
      <span className="font-bold text-xl">Ocurrio un error al cargar las preguntas</span>
    </div>;
  }
  return (
    <div>
      <AcordeonContainer
        tituloContainer="Preguntas Frecuentes"
        subtituloContainer=""
        id="faq"
      >
        {preguntas?.map((pregunta) => (
          <AcordeonItem
            key={pregunta.id}
            titulo={pregunta.pregunta}
            descripcion={pregunta.respuesta}
            lista={pregunta.respuestaLista}
          />
        ))}
      </AcordeonContainer>
    </div>
  );
}
