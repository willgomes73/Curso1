//const data = new Date();
// const umDia = 60 * 60 * 24 * 1000
//const tresHoras = 60 * 60 * 24 * 1000 
//const data = new Date(0 + tresHoras - umDia); // 01/12/2024 Timestamp unix
//const data = new Date(2024,0)//ano e mes// a,m,d,h,M,s,ms
/*
const data = new Date('2024-01-27 14:29:56');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());// Mês começa 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Sugundos', data.getSeconds());
console.log('Milesimo', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo 6 - Sabado
console.log(data.toString());
*/

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const Dia = zeroAEsquerda(data.getDate());
    const Mês = zeroAEsquerda(data.getMonth() + 1);
    const Ano = zeroAEsquerda(data.getFullYear());
    const Hora = zeroAEsquerda(data.getHours());
    const Minutos = zeroAEsquerda(data.getMinutes());
    const Segundos = zeroAEsquerda(data.getSeconds());

    return `${Dia}/${Mês}/${Ano} ${Hora}:${Minutos}:${Segundos}`
}
const dataa = new Date();
const dataBrasil = formataData(dataa);
console.log(dataBrasil);