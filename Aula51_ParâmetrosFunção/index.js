function pulaLinha(){
    console.log('--------------------')
}

function funcao(){
//console.log(arguments)
let total = 0;
for(let argumento of arguments) {
    total += argumento;
}
    console.log(total);
}
//Dentro dessa função, você usou a palavra-chave arguments.
// Essa palavra-chave se refere a todos os argumentos passados
// para a função, mesmo que você não os tenha especificado explicitamente
// nos parâmetros da função.
funcao(1,2,2,3,5,9);


function funcao1(a,b,c,d,e,f){
    pulaLinha();
    console.log('função1 vai ficar undefined')
    console.log(a,b,c,d,e,f);
    //andefined
    }
funcao1(1,2,3);

function funcaoSoma(a,b = 0){
    //caso não é informado um numero para o b posso aplicar valor padrão
    pulaLinha();
    console.log(a+b);
    //NaN
    }
funcaoSoma(1);  

function funcaoSoma1(a,b = 10,c = 4){
    //só consigo anuçar o valor mandado e seguir com o vlor padrão
    // com o undefined
    pulaLinha();
    console.log(a+b+c);
    //NaN
    }
funcaoSoma1(1, undefined,10); 

function funcao2({nome, sobre, idade}){
    //desistruturação 
    pulaLinha();
    console.log(nome, sobre, idade);

    }
funcao2({nome:'will', sobre: 'Gomes', idade: 21}); 

function funcao3([v1,v2,v3]){
    //desistruturação de arry
    pulaLinha();
    console.log(v1,v2,v3);

    }
funcao3(['Will Gomes','Souza',30]); 
pulaLinha();//                       Rest = resto
function conta(operador, acumulador,...numeros) {
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador = 1 ;acumulador /= numero;
       if(operador === '*') acumulador = 1 ; acumulador *= numero;
    }
    console.log(acumulador);
}//         Resto dos numeros
conta('/',0,20,30,40,50);
//         Resto dos numeros com iron function
const conta1 = (...args) => {
    pulaLinha();//  
    console.log(args);
}
conta1('/',0,20,30,40,50)