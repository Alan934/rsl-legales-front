import { GetServerSideProps } from "next";
import { usePostIpMutation } from "../../redux/services/ipApi"; // Importa tu mutación
import { useEffect } from "react";

//export default function OptenerIp({ ip }: { ip: string }) {
export default function OptenerIp() {
  const [postIp] = usePostIpMutation();

  /*useEffect(() => {
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
  
    sendIpToBackend();
  }, [ip, postIp]);*/
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        console.log('IP obtenida de la API pública:', ip);

        await postIp({ ip }).unwrap();
        console.log('IP enviada al backend:', ip);
      } catch (error) {
        console.error('Error al obtener o enviar la IP:', error);
      }
    };

    fetchIp();
  }, [postIp]);
  return null; 
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

