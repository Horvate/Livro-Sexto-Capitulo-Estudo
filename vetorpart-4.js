const form = document.querySelector('form');        // obtém elementos a serem manipulados
const resp = document.querySelector('pre');

const criancas = [];               // declara vetor global

form.addEventListener("submit", (e) => {        
  e.preventDefault();              // evita o envio do form
  
  const nome = form.inNome.value;                   // obtém conteúdo dos campos
  const idade = Number(form.inIdade.value);
  criancas.push({ nome, idade });                     // adicionar dados ao vetor de objetos
  form.reset();                                      // limpa campos do form
  form.inNome.focus();                             // posiciona no campo de formulário

  form.btListar.dispatchEvent(new Event("click"));    // dispara click em btListar
});

form.btListar.addEventListener("click", () => {
  if(criancas.length == 0) {
    alert("Não há crianças na lista!");        // se vazio, exibe alerta
    return
  }
  let lista = "";              // para concatenar a lista de objetos
  for(const crianca of criancas) {
    const {nome, idade} = crianca              // estrutura o objeto
    lista += nome + " - " + idade + " Anos\n";
  }
  resp.innerHTML = lista; // exibe a lista
});

 form.btResumir.addEventListener("click", () => {
   if(criancas.length == 0) {
     alert("Não crianças na lista!");
     return
   }
   const copia = [...criancas];        // cria ccópia do vetor criança
   copia.sort((a,b) => a.idade - b.idade);       // ordenar por idade
   let resumo = "";                // para concatenar daida
   let aux = copia[0].idade;     // menor idade do vetor ordenado
   let nomes = [];     // para inserir nome de cada idade
   for(const crianca of copia) {
     const { nome, idade } = crianca;
     if(idade == aux) {
       nomes.push(nome);         // adicionar ao vetor nomes
     }
     else {         // senão, monta o resumo para cada ideade
       resumo += aux + " ano(s): " + nome.length + " crianças(s) - ";
       resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
       resumo += "(" + nomes.join(", ") + ")\n\n";
       aux = idade             // obtém a nova idade na ordem 
       nomes = [];             // limpa o vetor dos nomes
       nomes.push(nome);
     }
   }
   // adiconar a última criança 
   resumo += aux + " ano(s): " + nomes.length + "criança(s) - ";
   resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
   resumo += "(" + nomes.join(",") + ")\n\n";
   resp.innerHTML = resumo      // exibe a resposta
 });





