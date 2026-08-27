//2. indexOf() - "Onde está?"
//Procura a primeira psoição do elemeto. Retorna o índice (0, 1, 2...)

console.log("=== 2. indexof() ===");

//exemplo1 - lista de frutas
const frutas = ["Maçã", "Banana", "Laranja"];
console.log("Posição da Banana:", frutas.indexOf("Banana"));

//exemplo2 - procurando aluno
const alunos = ["Ana","João","Carlos","Mariana"];
console.log("Posição de Mariana", alunos.indexOf("Mariana"));

//exemplo3 -quando não existe - retorna 1
console.log("Posição de Pedro", alunos.indexOf("Pedro"));

//exemplo4 - usando com if
const posicao = alunos.indexOf("João");

if (posicao !== -1) {
    console.log("Aluno encontrado na posição:", posicao)
} else {
    console.log("Aluno não encontrado");
}


