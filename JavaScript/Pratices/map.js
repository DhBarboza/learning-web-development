// Array:
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Método Map:
// numbers.map((item, index, array) => {});
/* Utilizamos a função map quando desejamos obter um array novo com o mesmo número
   de Objetos do outro */

const doubleNumbers = numbers.map((item) => item * 2);

console.log(doubleNumbers);

/* Caso de uso. Tenho uma lista de preços de produtos e preciso atualiza-lá
   com novos valores, sujeitos de promoções. Neste caso todos os produdos estão com
   50% de desconto */

// Array com os preços:
const prices = [40, 56, 48, 10, 5, 80];

// Preços em Promoção:
const salesPrice = prices.map((price) => price / 2);

console.log(`${prices}\n, ${salesPrice}`);

// Exemplo mais complexo:
const products = [
  { name: "Mouse", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

// Modifica o preço do produto xaso ele seja maior que 30:
const salesProduct = products.map((product) => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 };
  }

  return product;
});

console.log(salesProduct);
console.log(products);
