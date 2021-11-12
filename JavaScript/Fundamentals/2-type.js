// Tipo numérico:
// Declaração:
const number = 2;
const number1 = Number("5");
const number2 = Number("5.8");

// Imprimir resultado das variáveis:
console.log(`Number: ${number}`);
console.log(`Number 1: ${number1}`);
console.log(`Number 2: ${number2}`);

// Identificar se o número é inteiro:
console.log(`Number é Inteiro: `, Number.isInteger(number));
console.log(`Number1 é Inteiro: `, Number.isInteger(number1));
console.log(`Number2 é Inteiro: `, Number.isInteger(number2));

// Converter número para texto:
let numberToText = number.toString();
console.log(`Número para Texto: ${numberToText}`);

// COntrole do número de casas decimais:
let numberToFixed = number.toFixed(2);
console.log(`Número para valor: ${numberToFixed}`);

console.log("Seus tipos são: ");
console.log(typeof numberToText);
console.log(typeof numberToFixed);

// Converter número para binário:
let numberToBinary = number.toString(2);
console.log(`Número para Binário: ${numberToBinary}`);
