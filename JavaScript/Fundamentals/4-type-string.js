const pessoa = "Fulano";

// Acessar o 4° caracterer da string acima:
console.log(pessoa.charAt(4));

// Acessar o valor dentro da Tabela ASCI:
console.log("Letra: ", pessoa.charAt(3), "ASCI: ", pessoa.charCodeAt(3));

// Saber o índice associado ao valor dentro do texto:
console.log("A letra 'a' se encontra na posição: ", pessoa.indexOf("a"));

// Recortar uma palavra:
console.log(pessoa.substring(2));
console.log(pessoa.substring(0, 3));

// Concatenar palavras:
const nome = "Douglas";
const sobrenome = "Henrique";
console.log("Nome: ".concat(nome), "".concat(sobrenome));

// Substituir um caracter:
console.log(pessoa.replace("o", "a"));

// Armazenar uma frase em uma lista:
const frase = "Isto é uma frase";
// Separar por espaço:
console.log(frase.split(" "));
