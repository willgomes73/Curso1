const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// ele vai concatenar os array 
//const a3 = a1.concat(a2, [7, 8, 9,], 'Will');

// ... rest -> spread operation
//spred vai espalhar o arrat a1 e o a2 para dentro do a4 mas simples
const a4 = [...a1, ...a2, ...[7, 8,9]];
console.log(a4);


