//4. splice() - Vou mexer no array

console.log("=== 4. splice() ===");
//exemplo1- remover 1 item a partir do índice 1
 const frutas = ["Maçã", "Banana", "Laranja"];
 frutas.splice(1,1);
 console.log("Após remover Banana",frutas);

 //exemplo2 - remover dois itens
 const numeros = [10,20,30,40,50];
 numeros.splice(1,2);
 console.log("Após remover dois números:", numeros);

 //exemplo3 - adicionar sem remover nenhum
 const frutas2 = ["Maça","Banana","Uva"];
 frutas2.splice(2,0,"Laranja");
 console.log("Após adicionar Laranja na posição 2:", frutas2);

 //exemplo4 - substituir
 const cores = ["Vermelho","Azul","Verde"];
 cores.splice(1,1,"Roxo");
 console.log("Após substituir Azul Por Roxo:",cores);