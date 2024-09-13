const carros = [];
carros.push({modelo: "Corsa", ano: 2000, cor: "Verde"});
carros.push({modelo: "Meriva", ano: 2005, cor: "Cinza"});
for(carro of carros) {
  console.log(`${carro.modelo} - Cor: ${carro.cor}`);
}



const carro = []
const modelo = "Ford Ká";
const preco = 15000
carros.push({modelo, preco}); // ou carros.push({modelo:modelo, preco: preco})

  
for(const carro of carros) {
  const {modelo, preco} = carro;  // "desestrutura" objeto carro em modelo e preco
  console.log(`${modelo} - R$: ${preco}`)
}

const pacientes = ["Ana", "Carlos", "Sofia"]
const [a, b, c] = pacientes
console.log(a)  // Ana
console.log(b)  // Carlos
console.log(c)  // Sofia

const pacientes = ["Ana", "Carlos", "João", "Sofia"]
const [atender, proximo, ...outros] = pacientes
console.log(atender)  // Ana
console.log(proximo)  // Carlos
console.log(outros)  // Sofia

const carro = { modelo: "Corsa", preco: "59500"}
const carro2 = {...carro, ano: 2020}
console.log(carro2)     // {modelo: "Corsa", Preco: 59500, ano: .2020}

let pacientes = ["João", "Sofia"];
pacientes = ["ana", ...pacientes];     // acrescenta "Ana" no inicio do vetor
pacientes = [...pacientes, "Maria"];  // acrescenta "Maria" no final do vetor

const idades = [12, 20, 15, 17];
for(const idade of idades) {
  if(idade >= 18){
    console.log(idade)
  }
}

const idades = [12, 16, 15, 17, 14];
let maiores = false;

for(const idade of idades) {
  if(idade >= 18) {
    console.log(idade)
    maiores = true;
  }
}
if(!maiores) {
  console.log("Não há maiores que 18 na lista.");
}

