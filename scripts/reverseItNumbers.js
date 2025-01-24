const reverseItNumbersEnter = document.getElementById('reverseItNumbersEnter');
const numberInput = document.getElementById('numberInput');
const numberResponse = document.getElementById('numberResponse');
let userInput = "";

const ReverseItNumbersFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/ReverseItNumbers/ReverseIt/${userInput}`);
    const data = promise.text();
    return data;
}

reverseItNumbersEnter.addEventListener('click', async (event) => {
    userInput = numberInput.value;
    let response = await ReverseItNumbersFetch(userInput);
    numberResponse.innerText = response;
})