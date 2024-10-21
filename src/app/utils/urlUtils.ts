export const formatUrl = (name: string) => {
    let formatted = name.replace(/ñ/g, 'n');
    formatted = formatted.replace(/\//g, '-');  
    
    if (formatted.toLowerCase() === 'acerca de nosotros' || formatted.toLowerCase() === 'acerca de nosotros subcategoria') {
      return 'about';
    } else if (formatted.toLowerCase() === 'inicio' || formatted.toLowerCase() === 'inicio subcategoria') {
      return 'home';
    } else if (formatted.toLowerCase() === 'preguntas frecuentes' || formatted.toLowerCase() === 'preguntas frecuentes subcategoria') {
      return 'frequentquestions';
    }
  
    return formatted.toLowerCase().replace(/ /g, '-');
  };