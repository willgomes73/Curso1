function criaPessoa(nome, sobrenome,peso,altura) {
    return {
        nome,
        sobrenome,

        //Getter finge que é um atributo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },

        fala: function(assusto = 'falando cm você') {
            return `${nome} ${sobrenome} está ${assusto}.`
            //this.peso se refere à propriedade de peso do objeto pessoa criado
            // com criaPessoa. É uma maneira de acessar o valor do peso específico
            // dessa pessoa dentro da função fala.
        },
        peso,
        altura,
        //Getter finge que é um atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Will','Gomes',65,1.73);
p1.nomeCompleto = 'Bruno Françoso da Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

//console.log(p1.nome,p1.imc());
const p2 = criaPessoa('Julia','Silva',62,1.68);
//console.log(p2.nome,p2.imc());
//console.log(p1.fala('Cagando para você.'));