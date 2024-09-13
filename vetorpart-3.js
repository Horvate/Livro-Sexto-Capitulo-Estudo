const nomes = ["Ana", "João", "Eduardo"];
nomes.sort();
console.log(nomes.join(","));      // Ana, Eduardo, João
nomes.reverse();
console.log(nomes.join(","));     // João, Eduardo, Ana

const numeros = [50, 100, 2];
numeros.sort();
console.log(numeros.join(","));     // 100, 2, 50
numeros.sort((a,b) => a - b);
console.log(numeros.join(","));     // 2, 50, 100
