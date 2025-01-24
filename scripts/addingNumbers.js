const addingNumbersEnter = document.getElementById('addingNumbersEnter');
const addingNumbersNum1Input = document.getElementById('addingNumbersNum1Input');
const addingNumbersNum2Input = document.getElementById('addingNumbersNum2Input');
const addingNumbersResponse = document.getElementById('addingNumbersResponse');
let userInput = "";
let userInput2 = "";

const AddingNumbersFetch = async (userInput, userInput2) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/AddingTwoNumbers/Add2Numbers/${userInput}/${userInput2}`);
    const data = promise.text();
    return data;
}

addingNumbersEnter.addEventListener('click', async (event) => {
    userInput = addingNumbersNum1Input.value;
    userInput2 = addingNumbersNum2Input.value;
    let response = await AddingNumbersFetch(userInput, userInput2);
    addingNumbersResponse.innerText = response;
})