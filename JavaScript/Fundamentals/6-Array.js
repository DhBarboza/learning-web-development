// Declarando uma constante do tipo array:
const notas = [7.7, 8.8, 6.8, 3.5, 6.9, 9.2];

// Acessar um indice de uma lista:
console.log(notas[0], notas[3], notas[5]);

// Adicionar um valor a um indice:
notas[6] = 10.0;

// Visualizar o Array:
console.log(notas);

// Qual o tamanho do Array:
console.log(notas.length);

// Percorrer um array:
for (x = 0; x < notas.length; x++) {
  console.log(`Nota ${x}: ${notas[x]}`);
}

// Adicionar items em um array:
notas.push(3.6, 5.8, 3.2, 5.4);
console.log("Notas atualizadas: ", notas);

// Remove o ultimo valor do array:
notas.pop();
notasAtualizadas = notas;
console.log("Array sem o ultimo valor: ", notasAtualizadas);

// Excluir um número por indice:
delete notas[1];
console.log("Notas com indice 1 deletado: ", notas);
