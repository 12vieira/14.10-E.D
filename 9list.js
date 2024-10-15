const prompt = require("prompt-sync")();

let number = parseInt(prompt(`digite o número para calcular o fatorial: `));
let fatorial = 1;
for (let i = number; i > 1; i--)  {
    fatorial = fatorial * i;
} console.log(`o fatorial de ${number} é: ${fatorial}`);