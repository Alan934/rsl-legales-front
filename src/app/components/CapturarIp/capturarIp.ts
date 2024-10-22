"use client";
import { useEffect } from "react";
import { usePostIpMutation } from "../../redux/services/ipApi";

const CapturarIp: React.FC = () => {
  const [postIp] = usePostIpMutation();

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
};

export default CapturarIp;
