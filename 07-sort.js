//7. sort() -Organizado

console.log("=== 7. sort() ===");

//exemplo1 - nomes

const nomes = ["Carlos","Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes);

//exemplo2 - cidades
const cidades = ["São Paulo", "Campinas", "Valinhos", "Vinhedo"];
cidades.sort();
console.log("Cidades ordenadas:", cidades);

//exemplo3 - números
const numeros = [10,2,30,5];

numeros.sort((a,b) => a - b);
console.log("Números ordenados corretamente:", numeros);