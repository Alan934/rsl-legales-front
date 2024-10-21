
interface AcordeonContainerTypes{
    tituloContainer:string;
    subtituloContainer:string;
    id:string;
    children:React.ReactNode
}
export default function AcordeonContainer({tituloContainer,subtituloContainer,id,children}:AcordeonContainerTypes) {
  return (
    <div id={id}className="mt-6 px-4 text-wrap">
      <div className="text-center">
        <span className="font-bold text-2xl md:text-3xl lg:tet-4xl">
          {tituloContainer}
        </span>
        <p className="text-xl font-semibold">{subtituloContainer}</p>
      </div>
      {children}
    </div>
  );
}
