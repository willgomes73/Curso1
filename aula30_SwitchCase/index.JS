function gatDaySemanaText (diaSemana){
    let diaSemanaText ;

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

const data = new Date('2004-07-05 00:00:00');
const diaSemana = data.getDay();
const diaSemanaText = gatDaySemanaText(diaSemana);
console.log(diaSemana,diaSemanaText);