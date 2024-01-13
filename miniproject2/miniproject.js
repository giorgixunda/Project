const min_num = 1
const max_num = 100
const answer = Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number between ${min_num} - ${max_num}`);
    guess = Number(guess)
    if (isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    if(guess < min_num || guess > max_num){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("Too Low Try Again")
        }
        else if(guess > answer){
            window.alert("Too High Try AGain")
        }
        else{
            window.alert(`CORRECT! THE ANSWER WAS ${answer}. It took you ${attemps} attempts`);
            running = false;
        }
    }
}