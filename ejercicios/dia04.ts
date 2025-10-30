/*
Reto 04: Cual es tu algortimo favorito
Te da un array ORDENADO de números de teléfono (de menor a mayor) y necesitas encontrar uno específico lo más rápido posible.

El problema: Con 1000 números, buscar uno por uno sería demasiado lento. Necesitas un algoritmo más inteligente…

Me dan una pista para usar un algoritmo de búsqueda binaria
Un algoritmo de búsqueda binaria funciona dividiendo repetidamente a la mitad el rango de búsqueda hasta que se encuentra el objetivo o se determina que no está presente.
*/
function searchPhone(phones: number[], target: number): number {
  let indice = -1;
  let left = 0;
  let right = phones.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (phones[mid] === target) {
      indice = mid;
      break;
    } else if (phones[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return indice;
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

console.log(searchPhone(phones, 1008))
// → 3 (está en el índice 3)

console.log(searchPhone(phones, 1001))
// → 0 (está en el índice 0)

console.log(searchPhone(phones, 1020))
// → 6 (está en el índice 6)

console.log(searchPhone(phones, 9999))
// → -1 (no existe)