const form = document.querySelector("form");
const resp = document.querySelector("pre");

const numeros =[];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(form.inNumero.value);
  let lista = "";
  
  if(num >= 1) {
    
    numeros.push(num);
  
  } else {
    
    alert("Digite um número valido!")
    
  }
  const valorUnico = new Set();
  numeros.forEach((numero) => {
    valorUnico.add(numero);
  });

  const copia = [...valorUnico];
  form.inNumero.value = "";
  form.inNumero.focus();
  lista += `Números: ${copia}<br>Atenção... Números não estão em ordem crescente.`
  resp.innerHTML = lista;
  
});

form.inOrdem.addEventListener("click", () => {

  const valorUnico = new Set();
  numeros.forEach((numero) => {
    valorUnico.add(numero);
  });
  
  let lista = "";
  const copia = [...valorUnico];
  copia.sort((a, b) => a - b);
  lista += `Números: ${copia}<br>Números estão em ordem crescente.`;
  resp.innerHTML = lista;
});