/*
Dia 5: Quiero jugar a un juego
Tienes una cerradura de combinación con 4 ruedas. Cada rueda muestra un dígito del 0 al 9. La cerradura actualmente muestra un código, pero necesitas cambiarla a otro código.

"Puedes girar cada rueda hacia arriba (+1) o hacia abajo (-1). Las ruedas son circulares: después del 9 viene el 0, y antes del 0 está el 9.

Tienes que conseguir cambiar la combinación con el mínimo número de movimientos. Si haces un paso en falso… estás muerto.

La salida que se espera es el número mínimo de movimientos necesarios para llegar a la combinación objetivo.
*/

function changeLock(current: string, target: string): number {
  let movimientos = 0;
    for (let i = 0; i < 4; i++) {
    const d1 = parseInt(current[i]);
    const d2 = parseInt(target[i]);
    const diff = Math.abs(d1 - d2);
    movimientos += Math.min(diff, 10 - diff);
  }
  return movimientos;
}

console.log(changeLock('0022', '0044'))
// → 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4

console.log(changeLock('0000', '9999'))
// → 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4

console.log(changeLock('1234', '5678'))
// → 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16

console.log(changeLock('0000', '0000'))
// → 0
// Ya estamos en el código objetivo

console.log(changeLock('1357', '2468'))
// → 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4