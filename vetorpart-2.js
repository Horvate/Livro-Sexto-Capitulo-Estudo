//const numeros = [10, 13, 20, 8, 15];   // vetor inicial
//const dobro = numeros.map(num => num *2);  // cada número é obtido e multiplicado
                                           // por 2, criando um novo array
//console.log(dobro.join(','));

//const amigos = [{nome: "Thamires", idade: 26}, 
                //{nome: "Marcos", idade: 28}, 
               // {nome: "Anderson", idade: 35}];



//const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2024 - aux.idade}));


//for(amigo of amigos2) {
  //console.log(`${amigo.nome} - Nascido em: ${amigo.nasc}`);
//}


//const numeros = [10, 13, 20, 8, 15];     // vetor inicial 
//const pares = numeros.filter(num => num % 2 == 0);   // condição para o filtro
//console.log(pares.join(','));    // 10, 20, 8

//const amigos = [{nome: "Bruno", idade: 21},
               // {nome: "Débora", idade: 14},
                //{nome: "Breno", idade: 30}];

//const sele = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes('B'));

//for(const amigo of sele) {
  //console.log(`${amigo.nome} - Idade: ${amigo.idade}`);
//}

//const numeros = [10, 13, 20, 8, 15];
//const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);   // é o mesmo que linha 38 a 42
//console.log(`Soma: ${soma}`);      // soma: 66

//let acumulador = 0;
//for(const num of numeros) {
 // acumulador = acumulador + num;
//}
//const soma = acumulador;


//const amigos = [{nome: "Ana", idade: 17}, 
                //{nome: "Bruno", idade: 25}, 
                //{nome: "Cátia", idade: 20}];

//const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0);
//const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "");

//console.log(`Soma: ${soma} \nTodos: ${todos}`);

//const numeros = [10, 13, 20, 8, 15];
//const maior = numeros.reduce((a,b) => Math.max(a,b), 0);
//console.log(`Maior: ${maior}`);   // Maior: 20

