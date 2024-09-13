console.log("Informe os alunos. Após, digite 'Fim' para sair.");
const alunos = [];         // declara vetor

do {
  const nome = prompt("Nome: ")     // lê o nome
  if(nome == "Fim" || nome == "fim") {                 // antes de ler a nota verifica
    break    // sai da repetição
  }
  const nota = Number(prompt("Nota:"));      // lê nota
  alunos.push({nome, nota});   // adiciona dados ao vetor
  console.log(`Nome: ${nome}\nNota: ${nota}\nOk! Aluno(a) cadastrado(a)...`);
} while(true) {
  console.log("-".repeat(40));          // exibe 40 -
  const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);   // obtém a maior nota
  console.log(`Maior Nota: ${maior}`);          // exibe a maior nota      
    if(maior >= 7) {      // para verficar se tem destaques na turma
      const destaques = alunos.filter(aluno => aluno.nota == maior); // fltro
      for(const destaque of destaques) {      // percorre os alunos em destaques
        console.log(`- ${destaque.nome}`);    // mostra os nomes precedido por -)
      }
    } else {        // senão, vai exibir a mensagem
      console.log("Não a alunos em destaques na turma.")
    }
    
}