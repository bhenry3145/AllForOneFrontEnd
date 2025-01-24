const askingQuestionsEnter = document.getElementById('askingQuestionsEnter');
const askingQuestionsNameInput = document.getElementById('askingQuestionsNameInput');
const askingQuestionsWakeUpInput = document.getElementById('askingQuestionsWakeUpInput');
const askingQuestionsResponse = document.getElementById('askingQuestionsResponse');
let userInput = "";
let userInput2 = "";

const AskingQuestionsFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/TwoQuestions/WakeupTime/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

askingQuestionsEnter.addEventListener('click', async (event) => {
    userInput = askingQuestionsNameInput.value;
    userInput2 = askingQuestionsWakeUpInput.value;
    let response = await AskingQuestionsFetch(userInput, userInput2);
    askingQuestionsResponse.innerText = response;
})