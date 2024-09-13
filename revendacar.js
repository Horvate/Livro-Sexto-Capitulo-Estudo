const form = document.querySelector('form');     // obtém elementos da página
const resp = document.querySelector('pre');
const carros = [];             // declara vetor global

form.addEventListener("submit", (e) => {      // "escuta" evento submit do form
  e.preventDefault();                        // evita o envio do form

  const modelo = form.inModelo.value;               // obtém dados do form
  const preco = Number(form.inPreco.value);
  carros.push({modelo, preco});        // adicionar dados aovetor de objetos
  form.inModelo.value = "";      // limpa campos do form
  form.inPreco.value = "";
  form.inModelo.focus();           // posiciona cursor em inModelo

 // dispara um evento de click em btListar  (equivle a um click no botão da página)

  form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {      // "escuta" clique em btListar
  
  if(carros.length == 0) {               // se tamanho do vetor for igual a 0
    alert("Não há carros na lista!")
       return
  }
  // médoto reduce() concatena uma string, btendo model e preço de cada veiculo
  const lista = carros.reduce((acumulador, carros) => acumulador + carros.modelo + " - R$: " + carros.preco.toFixed(2) + "\n", "");
  resp.innerText = `Lista de carros cadastrados\n${"-".repeat(40)}\n${lista}`;
});

form.btFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Qual é o valor máximo que o cliente deseja pagar?"));
  if(maximo == 0 || isNaN(maximo)){                    // se não informou ou invalido
    return                    // ... retornar
  }
  // cria um novo vetor com os objetos que atendem a condição de filtro

  const carroFilter = carros.filter(carro => carro.preco <= maximo);
  if(carroFilter.length == 0) {
    alert("Não há carro inferior ou igual ao solicitado!");
    return
  }
  let lista = "";
  for(const carro of carroFilter) {        // percorre o elemento do array
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerHTML = `Carros Até R$: ${maximo.toFixed(2)} \n ${"-".repeat(40)}\n${lista}`
});


form.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto: "));
  if(desconto == 0 || isNaN(desconto)) {         // se não informou ou invalido
    return                  // ... retorna
  }
  const carroDesc = carros.map(aux =>({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto / 100)
  }));
  let lista = "";
  for(const carro of carroDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerHTML = `Carros com deconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
});

