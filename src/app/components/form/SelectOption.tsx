interface SelectOptionTypes {
    valorOption: number;
    tituloOption: string;
  }
  
  export default function SelectOption({
    valorOption,
    tituloOption,
  }: SelectOptionTypes) {
    return <option value={valorOption}>{tituloOption}</option>;
  }