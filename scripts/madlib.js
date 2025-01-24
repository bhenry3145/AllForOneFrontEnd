const madlibEnter = document.getElementById('madlibEnter');
const placeInput = document.getElementById('placeInput');
const adjectiveInput = document.getElementById('adjectiveInput');
const animalInput = document.getElementById('animalInput');
const adverbInput = document.getElementById('adverbInput');
const verbInput = document.getElementById('verbInput');
const nameInput = document.getElementById('nameInput');
const amountInput = document.getElementById('amountInput');
const itemInput = document.getElementById('itemInput');
const vehicleInput = document.getElementById('vehicleInput');
const countryInput = document.getElementById('countryInput');
const madlibResponse = document.getElementById('madlibResponse');
let userInput = "";
let userInput2 = "";
let userInput3 = "";
let userInput4 = "";
let userInput5 = "";
let userInput6 = "";
let userInput7 = "";
let userInput8 = "";
let userInput9 = "";
let userInput10 = "";

const MadlibFetch = async (userInput, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/Madlib/Madlib/${userInput}/${userInput2}/${userInput3}/${userInput4}/${userInput5}/${userInput6}/${userInput7}/${userInput8}/${userInput9}/${userInput10}`);
    const data = promise.text();
    return data;
}

madlibEnter.addEventListener('click', async (event) => {
    userInput = placeInput.value;
    userInput2 = adjectiveInput.value;
    userInput3 = animalInput.value;
    userInput4 = adverbInput.value;
    userInput5 = verbInput.value;
    userInput6 = nameInput.value;
    userInput7 = amountInput.value;
    userInput8 = itemInput.value;
    userInput9 = vehicleInput.value;
    userInput10 = countryInput.value;
    let response = await MadlibFetch(userInput, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10);
    madlibResponse.innerText = response;
})