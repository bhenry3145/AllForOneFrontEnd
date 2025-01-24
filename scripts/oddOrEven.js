const oddOrEvenEnter = document.getElementById('oddOrEvenEnter');
const oddOrEvenInput = document.getElementById('oddOrEvenInput');
const oddOrEvenResponse = document.getElementById('oddOrEvenResponse');
let userInput = "";

const OddOrEvenFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${userInput}`);
    const data = promise.text();
    return data;
}

oddOrEvenEnter.addEventListener('click', async (event) => {
    userInput = oddOrEvenInput.value;
    let response = await OddOrEvenFetch(userInput);
    oddOrEvenResponse.innerText = response;
})