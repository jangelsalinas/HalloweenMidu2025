/*
Reto 03 : Viernes 13
Michael Myers ha dejado un patrón en su calendario…

Cada año ataca en noche de Halloween (31 de octubre) o en cualquier viernes 13.

Tu misión es encontrar todas las noches de terror de un año concreto 🩸

Recibirás un año (por ejemplo 2025) y deberás devolver un array con todas las fechas en formato 'YYYY-MM-DD' donde Michael Myers podría atacar.
*/
function myersCalendar(year: number): string[] {
    if (typeof year !== 'number' || !Number.isInteger(year) || year < 1900 || year > 2100) {
        return [];
    }
  let dates: string[] = [];
  
  // Comprobar todos los meses del año
  for (let month = 0; month < 12; month++) {
    // Comprobar si el día 13 es viernes
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) { // 5 representa viernes
      dates.push(`${year}-${String(month + 1).padStart(2, '0')}-13`);
    }
  }
    dates.push(`${year}-10-31`);
  // Devolver fechas únicas y ordenadas
  const unique = Array.from(new Set(dates));
  unique.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  return unique;
}

console.log(myersCalendar(2025))
// → [ '2025-06-13', '2025-10-31' ]

console.log(myersCalendar(2026))
// → [ '2026-02-13', '2026-03-13', '2026-11-13' ]

console.log(myersCalendar(2024))
// → [ '2024-09-13', '2024-12-13' ]