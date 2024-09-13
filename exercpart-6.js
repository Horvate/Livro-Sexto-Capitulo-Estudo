const form = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inCandidato.value;
  const acertos = Number(form.inAcertos.value);
  

  if (nome.length <= 1) {
    alert("Por favor... digite conteúdos validos.");
    form.reset();
    return
  }

  candidatos.push({nome, acertos});
  form.inCandidato.focus();
  form.reset();
  //console.log(candidatos);

  form.inListar.dispatchEvent(new Event("click"));
});

form.inListar.addEventListener("click", () => {

  if(candidatos.length == 0) {
    alert("Não há candidatos na lista.");
  }
  let lista = "";
  for(const candidato of candidatos) {
    const {nome, acertos} = candidato
  lista += `${nome} - ${acertos} Acertos\n`;
  }
  resp.innerHTML = lista;
});

form.inAprovados.addEventListener("click", () =>  {
  if(candidatos.length == 0) {
    alert("Não há ninguém na lista.");
    return
  }
  const num = prompt("Número de Acertos para Aprovação.");
  let lista = "";
  for(const candidato of candidatos) {
    const {nome, acertos} = candidato;
    if(acertos >= num) {
      lista += `${nome} - ${acertos} Acertos\n`;
    }
  }
  resp.innerHTML = lista;
  
});