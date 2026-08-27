console.log("===8. Combinando Métodos ===");

//exemplo1 - lista de alunos
const alunos = [
    "Carlos",
    "Ana",
    "Pedro",
    "João",
    "Mariana"
];
console.log("Tem João?",alunos.includes("João"));
console.log("Posição de Mariana:", alunos.indexOf("Mariana"));

//exemplo2 -Orgaizar e transformar
const nomes = [
    "Carlos",
    "Ana",
    "Pedro",
    "João"
];

nomes.sort();
const resultadosNomes = nomes.join (" - ");
console.log("Nomes oganizados e formatados:", resultadosNomes);

//exemplo3 - Pegar uma parte e mostrar
const produtos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Headset",
    "Webcam"
];

const destaque = produtos.slice(2,5);
console.log("Produtos em destaque:", destaque.join(", "));