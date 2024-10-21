export function getFechaHoy(){
    const date = new Date().toLocaleDateString("es-AR");
    return date;
}