/*
Reto 02: Contando ovejas
Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.
*/
function countSheep(letters: string): number {
  let total = 0
    const sheepWord = 'sheep'
    const letterCount: { [key: string]: number } = {}
    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1
    }
    while (true) {
        for (const letter of sheepWord) {
            if (!letterCount[letter] || letterCount[letter] === 0) {
                return total
            }
            letterCount[letter]--
        }
        total++
    }
  return total
}

console.log(countSheep('sheepxsheepy'))
// → 2 (puedes formar "sheep" dos veces)

console.log(countSheep('sshhheeeepppp'))
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)