const form = document.querySelector("form");
const resp = document.querySelector("#inParagrafo");

const clubes = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = form.inClube.value;


  if(clube.length >= 3) {
    
    clubes.push(clube);
    
  } else {
    
   alert("Por favor, digite um clube válido.")
  }
  
  form.inClube.value = "";
  form.inClube.focus();

  form.inClube.dispatchEvent(new Event("click"));
});

form.inLista.addEventListener("click", () => {
  
  resp.innerHTML = clubes;
  
});

form.inTabela.addEventListener("click", () => {
    
  if(clubes.length <= 1) {
    resp.innerHTML = "Não há clubes o suficiente para o confronto.";
    return
  }

  const copia = [...clubes];
  let lista = "";

  for (let i = 0; i <= copia.length; i++) {
    const primeiro = copia.splice(0, 1);
    const ultimo = copia.splice(-1);
    lista += `${primeiro} x ${ultimo}<br>`;
    }
     resp.innerHTML = lista;
});




