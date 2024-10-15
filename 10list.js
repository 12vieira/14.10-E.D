const prompt = require("prompt-sync")();

for (let i = 1; i <= 20; i++)  {
    if((i % 5 == 0 && i % 3 == 0)){
        console.log(`${i} fizzbuzz`);
    } else if(i % 3 == 0){
        console.log(`${i} fizz`);
    } else if (i % 5 == 0){
        console.log(`${i} buzz`);
    }
}