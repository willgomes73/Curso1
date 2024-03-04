/*const h1 = document.querySelector('.container h1');
const data = new Date();

// pega o dia da semana em numero e transforma em texto ex segunda terça etc..
// ele recebe o diaSemana em numero de 0 a 6 e retorna diaSemanaText em texto
function gatDaySemanaText (diaSemana){
  //  let diaSemanaText ;
const diasSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
    retunr diasSemana[diaSemana];
switch(diaSemana){
    case 0 : diaSemanaText = 'Domingo';
    // quando minha função encontrar o case 0 elevai cair no return
    // e assim parando minha função
    
    return diaSemanaText;
    case 1 : diaSemanaText = 'Segunda';
    return diaSemanaText;
    case 2 : diaSemanaText = 'Terça';
    return diaSemanaText;
    case 3 : diaSemanaText = 'Quarta';
    return diaSemanaText;
    case 4 : diaSemanaText = 'Quinta';
    return diaSemanaText;
    case 5 : diaSemanaText = 'Sexta';
    return diaSemanaText;
    case 6 : diaSemanaText = 'Sabado';
    return diaSemanaText;
    default:
        diaSemanaText = 'Erro no dia da Semana';
}
}
  //pega o mês em numero de 0 a 11 e transforma em texto ex janeiro fevereiro etc..
  // ele recebe numeroMes em numero e retorna em nomeMes texto 
function getNomeMes (numeroMes){
   // let nomeMes ;
const nomeMes = ['Jeneiro','Fevereiro','Marça','Abril','Maio','Junho','Julho','Agosto',
      'Setembro','Otubro','Novembro','Dezembro'];
      return meses[numeroMes];
    return nomeMes;
switch(numeroMes){
    case 0 :nomeMes  = 'Jeneiro';
    // quando minha função encontrar o case 0 ele vai cair no return
    // e assim parando minha função
    
    case 1 : nomeMes = 'Fevereiro';
    return nomeMes;
    case 2 : nomeMes = 'Marça';
    return nomeMes;
    case 3 : nomeMes = 'Abril';
    return nomeMes;
    case 4 : nomeMes = 'Maio';
    return nomeMes;
    case 5 : nomeMes = 'Junho';
    return nomeMes;
    case 6 : nomeMes = 'Julho';
    return nomeMes;
    case 7 : nomeMes = 'Agosto';
    return nomeMes;
    case 8 : nomeMes = 'Setembro';
    return nomeMes;
    case 9 : nomeMes = 'Otubro';
    return nomeMes;
    case 10 : nomeMes = 'Novembro';
    return nomeMes;
    case 11 : nomeMes = 'Dezembro';
    return nomeMes;
    default:
        nomeMes = 'Erro no dia do Mês';
}

} 
// formata as horas e minutos
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
/*  ela cria as datas baseadas nas funções anteriores diaSemana numeroMes
    tranformando em nomeDia que é nome da seman ex Quarta e 
    numeroMes em nomeMes em vez de 0 janeiro ou 1 fevereiro 
    ela retorna asssim o dia da semana'nomeDia' dia do mês'data.getDate' o nome do mês'nomeMes'
    o ano 'data.getFullYear' a hora 'zeroAEsquerda(data.getHours())' e os
    minutos 'zeroAEsquerda(data.getMinutes())'
function criaData(data){
const diaSemana = data.getDay();
const numeroMes = data.getMonth();

const nomeDia = gatDaySemanaText(diaSemana);
const nomeMes = getNomeMes(numeroMes);

return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ` + 
        `${data.getFullYear()} `+
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

);
}
// ele vai pegar da class container o h1 e trocar o valor da função criaData
h1.innerHTML = criaData(data);*/


const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full'
    
    
};
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

