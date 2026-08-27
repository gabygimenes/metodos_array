// 1. includes() - "tem esse item?"
//Responde à pergunta: "Existe?" (Retorna true ou false)

console.log("=== 1. includes()=====");

//Exemplo1 -lista de frutas
const frutas = ["Maça", "Banana", "Laranja"];

console.log("Tem banana?", frutas.includes("Banana"));

console.log("Tem uva?", frutas.includes("Uva"));

//exemplo2 - usando if/else
if (frutas.includes("Banana")) {
    console.log("Tem banana!");
}   else {
    console.log("Não tem banana!");
}

//EXEMPLO 3 - lista de alunos
const alunos = ["Ana", "João", "Carlos"];
const nome = "João";

if(alunos.includes(nome)) {
    console.log("Aluno econtrado!");
} else {
    console.log("Aluno não encontrado");
}
