"use client";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import Form from "./components/form/Form";
import ContadorFirmasContainer from "@/app/components/ContadorFirmas/ContadorFirmasContainer";
import AcordeonContainer from "./components/InfoDesplegable/AcordeonContainer";
import AcordeonQuery from "./components/InfoDesplegable/AcordeonQuery";
import DropdownSummaryContainer from "./components/InfoDesplegable/DropDownSummaryContainer";

export default function Home() {
  return (
    <div>
      <HeroBanner
        imgUrl="/heroBanner.png"
        titulo="Un escribano en Mendoza es un gran aliado..."
        subtexto="Servicios Notariales y Asesoramiento Escribano en Mendoza"
        btnColor="#BDA356"
        btnTexto="Contactar"
        esconderBtn={false}
        heightHeroBanner="h-dvh"
        id=""
      />
      <AcordeonContainer
        id="servicios"
        tituloContainer="Servicios de escribania en Mendoza"
        subtituloContainer="Certificaciones, Contratos y Mas..."
      >
        <DropdownSummaryContainer />
      </AcordeonContainer>
      <ContadorFirmasContainer />
      <HeroBanner
        imgUrl="/heroBanner2.jpg"
        titulo="Sabias que tambien contamos con un equipo de abogados?"
        subtexto=""
        btnColor="#3A5E92"
        btnTexto="Me Interesa"
        esconderBtn={true}
        heightHeroBanner="h-96"
        id="abogados"
      />
      <AcordeonQuery />
      <Form />
    </div>
  );
}
