/*
Dia 06: El caos
Art the Clown 🤡 ha capturado a unas víctimas y las ha sentado en círculo 🎪, numeradas del 0 a N-1, siendo N el número de victimas.

Art, siendo un payaso metódico en su locura, decide hacer un "juego". Empieza en la posición 0 y cuenta K víctimas en sentido horario (incluyendo a la persona actual en la cuenta). La víctima donde termina la cuenta es eliminada del círculo.

Luego, Art continúa contando K posiciones desde la siguiente persona viva. El proceso se repite hasta que solo queda una persona.

En su retorcida mente, Art quiere saber: ¿Quién será el último sobreviviente?

Implementa la función surviveRoulette(victims, count) que devuelve la posición de la última víctima que sobrevive.
*/
function surviveRoulette(n: number, k: number): number {
  let salvado = -1;
    let victimas: number[] = [];
    for (let i = 0; i < n; i++) {
        victimas.push(i);
    }
    let indice = 0;
    while (victimas.length > 1) {
        indice = (indice + k - 1) % victimas.length;
        victimas.splice(indice, 1);
    }
    salvado = victimas[0];
  return salvado
}

console.log(surviveRoulette(4, 2))
// Resultado: 0

// Explicación:
// Inicio de 4 víctimas: [0, 1, 2, 3]
// Cuenta 2 desde posición 0: elimina 1 → [0, 2, 3]
// Cuenta 2 desde la última víctima: elimina 3 → [0, 2]
// Cuenta 2 desde la última víctima: elimina 2 → [0]
// Sobrevive: 0

console.log(surviveRoulette(5, 3))
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 3 desde 0: elimina 2 → [0, 1, 3, 4]
// Cuenta 3 desde 3: elimina 0 → [1, 3, 4]
// Cuenta 3 desde 1: elimina 4 → [1, 3]
// Cuenta 3 desde 1: elimina 1 → [3]
// Sobrevive: 3

console.log(surviveRoulette(5, 10))
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 10 desde 0: elimina 4 → [0, 1, 2, 3]
// Cuenta 10 desde 0: elimina 2 → [0, 1, 3]
// Cuenta 10 desde 0: elimina 0 → [1, 3]
// Cuenta 10 desde 1: elimina 1 → [3]
// Sobrevive: 3