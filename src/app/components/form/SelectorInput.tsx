interface SelectorInputTypes {
    tituloLabel: string;
    nombreInput: string;
    htmlForId: string;
    children:React.ReactNode
  }
  
  export default function SelectorInput({
    tituloLabel,
    nombreInput,
    htmlForId,
    children
  }: SelectorInputTypes) {
    return (
      <div className="text-black flex flex-col space-y-2">
        <label htmlFor={htmlForId}>{tituloLabel}</label>
        <select id={htmlForId} name={nombreInput} className="border border-black p-1 rounded md:h-9 lg:h-11">
          {children}
        </select>
      </div>
    );
  }