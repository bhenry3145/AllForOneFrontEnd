const reverseItAlphaEnter = document.getElementById('reverseItAlphaEnter');
const alphaInput = document.getElementById('alphaInput');
const alphaResponse = document.getElementById('alphaResponse');
let userInput = "";

const ReverseItAlphaFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/ReverseItAlpha/ReverseItAlpha/${userInput}`);
    const data = promise.text();
    return data;
}

reverseItAlphaEnter.addEventListener('click', async (event) => {
    userInput = alphaInput.value;
    let response = await ReverseItAlphaFetch(userInput);
    alphaResponse.innerText = response;
})