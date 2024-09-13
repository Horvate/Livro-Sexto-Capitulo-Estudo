console.log("Informe o valor do saque ou 0 para sair");
const saques = [];

do {
const valor = Number(prompt("Saque R$:"));       // lê valor
  if(valor == 0) {
    break;          // sa da repetição
  } 
  saques.push(valor);        // adiciona ao vetor de saques
  if(valor % 10 == 0) {
    console.log("Saque realizado com sucesso.");
  } else {
    console.log("Erro... Valor inválido (deve ser multiplo de 10)");
  }
} while(true);
console.log("\n Saques Validos");       // \n no inicio gera uma nova linha
console.log("-".repeat(40));       // exibe 40 -
const saqueValidos = saques.filter(saque => saque % 10 == 0);
for(const saque of saqueValidos) {
  console.log(saque.toFixed(2));
}
console.log("-".repeat(40));
const totalsacado = saqueValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total de saques: R$${totalsacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saqueValidos.length;
console.log(`\nNº de Tentativas de Saque (saques inválidos): ${saquesInvalidos}`);


