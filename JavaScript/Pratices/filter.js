const randomNumbers = [36, 99, 56, 47];

/*
 * Filter cria um novo array
 * Verificando quais item do array original atendem a condição expecificada
 * Deve retornar um boolean
 */
const numbersGreatThan37 = randomNumbers.filter((number) => number > 37);

console.log(numbersGreatThan37);
