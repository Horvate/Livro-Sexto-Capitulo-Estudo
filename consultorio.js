const form = document.querySelector('form');   // obtém elementos da página
const respNome = document.querySelector('span ');
const respLista = document.querySelector('pre');

const pacientes = []; // declara vetor global

form.addEventListener('submit', (e) => {
  e.preventDefault();    // evita envio do form
  const nome = form.inPaciente.value;  // onbtém nome do paciente
  pacientes.push(nome);     // adiciona nome no final do vetor
  let lista = "";    // string para concatenar paciente

  // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)

  for(let i = 0; i < pacientes.length; i++) {
    lista += i + 1 + "." + pacientes + "\n";
  }
  respLista.innerHTML = lista;   // exibe a lista de pacientes na página
  form.inPaciente.value = "";   // limpa conteúdo do campo formulário
  form.inPaciente.focus();    // posiciona o cursor no campo
});

// adiciona um "ouvinte" para o evento click no btUrgencia que esta no form

form.btUrgencia.addEventListener('click', () =>{
  // verifica se as validações do form estão ok (no caso, paciente is required)

 if(!form.checkValidity()) {
   alert("Informe o nome do paciente a ser atendido em caráter de urgência");
   form.inPaciente.focus();  // poiciona o cursor no campo paciente
   return                 // retorna ao form
 }
  const nome = form.inPaciente.value    // obtém o nome do paciente
  pacientes.unshift(nome);      // adiciona paciente ao inicio do vetor
  let lista = "";              // string para concatenar pacientes
  // forEach aplicado sobre o array paciente

  pacientes.forEach((paciente, i) => lista += i + 1 + "." + paciente + "\n");
  respLista.innerHTML = lista;    // exibe a lista de pacientes na página
  form.inPaciente.value = "";    // limpa o conteúdo do campo formulário
  form.inPaciente.focus();      // posiciona o cursor no campo 
  
});

form.btAtender.addEventListener('click', () => {
  // se o tamanho do vetor = 0
  if(pacientes.length == 0) {
    alert('Não a pacientes na lista de espera');
    form.inPaciente.focus();
    return
  }

  const atender = pacientes.shift()   // remove do início da fila (e obtém nome)
  respNome.innerHTML = atender     // exibe o nome do paciente em atendimento
  let lista = ""           // string para concatenar pacientes
  pacientes.forEach((paciente, i) => (lista += i + 1 + "." + paciente + "\n"));
  respLista.innerHTML = lista // exibe a lista de pacientes na página
});