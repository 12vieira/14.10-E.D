const prompt = require("prompt-sync")();
let divisores = 0;
let primo = parseInt(prompt(`informe o número: `));
if (primo == 1){
    console.log('o número 1 não é primo')
} else {
for (let i = 2; i <= 200; i++)  {
    if(primo % 1 == 0 && primo % i == 0){
            divisores = divisores + 1;
        }
    }
        if (divisores == 1){
            console.log(`o número ${primo} é primo`)
        } else{
            console.log(`o número ${primo} não é primo`)
        }
}