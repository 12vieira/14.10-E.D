const prompt = require("prompt-sync")();
let divisor = 0;
    console.log(`o número 1 é não primo`);
for (let number = 2; number <= 20; number++)  {
     for(let divisivel = 1; divisivel<= number; divisivel++){
        if(number % divisivel == 0){
            divisor++;
        }
     }
     if(divisor == 2){
        console.log(`o número ${number} é primo `)
     } else {
        console.log(`o número ${number} é não primo `)
     } divisor = 0;
    
}