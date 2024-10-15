const prompt = require("prompt-sync")();

for (let i = 1; i <= 20; i++)  {
    if((i < 10)){
        console.log(`o número ${i} é menor que 10;`);
    } else {
        console.log(`o número ${i} é maior ou igual que 10;`);
    }
}