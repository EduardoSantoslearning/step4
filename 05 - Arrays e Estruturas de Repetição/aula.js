const alunos = ['Cleber', 'Pedro', 'Eduardo'];
alunos.push('Carlos');
alunos[4] = ('Vinicius');
console.log(alunos);
alunos.pop();
console.log(alunos);
console.log(alunos.shift());

//

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(2);
notas.push(3);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma / notas.length;

console.log(soma);
console.log(media);

//

