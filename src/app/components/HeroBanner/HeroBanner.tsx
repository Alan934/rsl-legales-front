import { lexend } from "@/fonts/fonts";
import Image from "next/image";
import { usePostIpMutation } from "../../redux/services/ipApi";



interface HeroBannerTypes {
  imgUrl: string;
  titulo: string;
  subtexto: string;
  btnColor: string;
  btnTexto: string;
  esconderBtn: boolean;
  heightHeroBanner: string;
  id: string;
}

export default function HeroBanner({
  imgUrl,
  titulo,
  subtexto,
  btnColor,
  btnTexto,
  esconderBtn,
  heightHeroBanner,
  id,
}: HeroBannerTypes) {
  const [postIp] = usePostIpMutation();

  const obtenerIp = async () => {// Capturar IP
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

  return (
    <div id={id} className="overflow-x-hidden">
      <div
        className={`relative w-full flex items-center justify-center overflow-hidden ${heightHeroBanner}`}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent">
          <Image
            src={`${imgUrl}`}
            alt="fondo"
            title="fondo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="z-0 transform transition-transform duration-1000 ease-in-out scale-60"
            data-geolocalization="-32.87194646008121, -68.82772021189432"
          />
          <div className="absolute w-full text-center text-wrap px-4 py-8 z-20">
            <div className="max-w-xl mx-auto md:max-w-5xl px-4 py-12 space-y-4">
              <h1
                className={`text-zinc-100 sm:leading-loose text-2xl md:text-3xl font-semibold lg:leading-10 lg:text-5xl lg:font-bold ${lexend.className}`}
              >
                {titulo}
              </h1>
              <h3
                className={`text-zinc-100 text-base md:text-lg lg:text-xl font-light leading-6 mb-4 ${lexend.className}`}
              >
                {subtexto}
              </h3>
              <div className="w-full p-4">
                <a href="https://wa.me/+5492612795816"
                  className="text-white rounded-lg p-2 font-semibold text-base md:text-lg lg:text-2xl"
                  target="_blank" 
                  onClick={ obtenerIp }
                  style={{ background: `${btnColor}` }}
                >
                  {btnTexto}
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              esconderBtn
                ? "hidden"
                : "size-20 flex justify-center items-center absolute bottom-5 right-5 rounded-full"
            }
            style={{ background: "#EAEAEA33" }}
          >
            <a href="https://wa.me/+5492612795816" target="_blank" onClick={ obtenerIp }>
              <Image
                src={"/whatsappLogo.png"}
                alt="logo"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
