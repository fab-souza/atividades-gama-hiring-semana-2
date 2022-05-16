const pessoa = {
    nome: 'babaca',
    sobrenome: 'qualquer',
    idade: 28,
    profissao: 'npc'
}

console.log(pessoa);

// como um iniciante faria:
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let {nome, sobrenome, idade, profissao} = pessoa;

console.log(nome, sobrenome, idade, profissao);