const comparingNumbersResponse = document.getElementById('comparingNumbersResponse');
const comparingNumbersNum1Input = document.getElementById('comparingNumbersNum1Input');
const comparingNumbersNum2Input = document.getElementById('comparingNumbersNum2Input');
const comparingNumbersEnter = document.getElementById('comparingNumbersEnter');
let userInput = "";
let userInput2 = "";

const ComparingNumbersFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/TwoNumbersSentences/2Numbers/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

comparingNumbersEnter.addEventListener('click', async (event) => {
    userInput = comparingNumbersNum1Input.value;
    userInput2 = comparingNumbersNum2Input.value;
    let response = await ComparingNumbersFetch(userInput, userInput2);
    comparingNumbersResponse.innerText = response;
})