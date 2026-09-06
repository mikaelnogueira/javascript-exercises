// OBJETO
const pessoa = {
    nome: 'Vitor Guerra',
    idade: 25,

    // MÉTODO: uma função dentro do objeto
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// // ALTERANDO/CRIANDO O MÉTODO
// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// };

// CHAMANDO O MÉTODO
console.log(pessoa['nome'], pessoa['idade']);