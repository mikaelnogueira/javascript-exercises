// OBJECT
const pessoa = {
    nome: 'Vitor Guerra',
    idade: 25,

    // METHOD: a function defined inside an object
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// // CHANGING OR REPLACING THE METHOD
// pessoa.descrever = function() {
//     console.log(`My name is ${this.nome}`);
// };

// CALLING THE METHOD
console.log(pessoa['nome'], pessoa['idade']);
