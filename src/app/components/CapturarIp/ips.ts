import { GetServerSideProps } from "next";
import { usePostIpMutation } from "../../redux/services/ipApi"; // Importa tu mutación
import { useEffect } from "react";

export default function Home({ ip }: { ip: string }) {
  const [postIp] = usePostIpMutation();

  useEffect(() => {
    const sendIpToBackend = async () => {
      try {
        // Enviar la IP capturada al backend
        console.log("Enviando IP al backend:", ip);
        const response = await postIp({ ip }).unwrap();
        console.log("Respuesta del backend:", response);
      } catch (error) {
        console.error("Error al enviar la IP:", error);
      }
    };
  
    sendIpToBackend(); // Enviar la IP al cargar la página
  }, [ip, postIp]);
  console.log("IP enviada"+ ip);
  return null; // No retorna ninguna vista
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
  console.log("IP obtenida en el servidor:", ip);
  return {
    props: {
      ip: ip || "IP desconocida",
    },
  };
};

