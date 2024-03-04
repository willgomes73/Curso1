function ramdom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = ramdom(min,max);

//ele verifica depois executa
while (rand !== 10) {
    rand = ramdom(min, max)
    console.log(rand);
}
//ele executa depois verifica
do{
    rand = ramdom(min, max)
    console.log(rand);
}while(rand !== 10)

/*let i = 0;

while (i <= 10) {
console.log(i);
i++;
}*/