//3. slice() - Quero só uma parte

console.log("===3. slice() ===");

//Exemplo 1 - podutos
const produtos = [
    "Mouse", 
    "Teclado",
    "Monitor",
    "Headset"
];
const produtosSelecionados =  produtos.slice(1,3);
console.log("Produtos selecionados (1 a 3):", produtosSelecionados);

//exemplo2 - primeiro elementos
const numeros = [10,20,30,40,50];
const primeirosTres = numeros.slice(0,3);
console.log("Primeiros três números:", primeirosTres);

//exemplo3 - do índice até o final (sem passar o 2 parâmetro)
const aPartirDoIndiceDois = numeros.slice(2);
console.log("Do índice 2 até o final:", aPartirDoIndiceDois);

//exemplo4 - mostrado que Não altera o array original
const frutas = ["Maçã", "Banana", "Laranja","Uva"];
const novasFrutas = frutas.slice(1,3);

console.log ("Array original (intacto):",frutas);
console.log ("Novo array fatiado:" , novasFrutas);