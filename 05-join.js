//5. join()

console.log("=== 5. join() ===");
 
//exemplo1 - separador padrão
const nomes = ["Ana","João","Carlos"];
console.log("Com separador padrão:", nomes.join());

//exempllo2 - escolhendo separador personalizado
console.log("Com hífen:", nomes.join(" - "));

//exemplo3 - lista de tecnologias
const tecnologias = ["HTML", "CSS", "Java Script", "React"];
const texto = tecnologias.join(" | ");
console.log ("Tecnologias formatadas:", texto);