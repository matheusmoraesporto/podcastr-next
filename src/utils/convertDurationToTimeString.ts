export function convertDurationToTimeString(duration: number): string {
    const hours = Math.floor(duration / 3600);

    const minutes = Math.floor((duration % 3600) / 60);

    const seconds = duration % 60;

    const finalResult = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) // se valor toString retornar apenas uma hora (ex: 1) então junta o valor '0' no início ficando no exemplo 01
        .join(':');

    return finalResult;
}