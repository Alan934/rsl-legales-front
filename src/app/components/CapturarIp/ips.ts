import { GetServerSideProps } from "next";
import { usePostIpMutation } from "../../redux/services/ipApi"; // Importa tu mutación
import { useEffect } from "react";

export default function Home({ ip }: { ip: string }) {
  const [postIp] = usePostIpMutation();

  useEffect(() => {
    const sendIpToBackend = async () => {
      try {
        // Enviar la IP capturada al backend
        await postIp({ ip }).unwrap();
        console.log("IP enviada:", ip);
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

  return {
    props: {
      ip: ip || "IP desconocida",
    },
  };
};

