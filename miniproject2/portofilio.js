const myCheckbox = document.getElementById("myCheckbox");
const SecondCheckbox = document.getElementById("SecondCheckbox");
const QuestionResult = document.getElementById("QuestionResult");
const mySubmit = document.getElementById("mySubmit");
const FirstCheckbox = document.getElementById("FirstCheckbox");





mySubmit.onclick = function(){
    if(myCheckbox.checked){
        QuestionResult.textContent = '';
    }
    else if(FirstCheckbox.checked){
        QuestionResult.textContent = 'Good Choice You Going Defeat Matrix! Check Our Facebook! Name Goal Oriented Academy Or Click Facebook Icon Above!';
    }
    else if(SecondCheckbox.checked){
        QuestionResult.textContent = 'Bad Choice You Going Get Defeated By Matrix';
    }
    else{
        QuestionResult.textContent = 'Choose Answer!';
    }
}