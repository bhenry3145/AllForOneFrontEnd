const helloWorldEnter = document.getElementById('helloWorldEnter');
const helloWorldInput = document.getElementById('helloWorldInput');
const helloWorldResponse = document.getElementById('helloWorldResponse');
let userInput = "";

const GetHelloWorldFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/SayHello/AddName/${userInput}`);
    const data = promise.text();
    return data;
}

helloWorldEnter.addEventListener('click', async (event) => {
    userInput = helloWorldInput.value;
    let response = await GetHelloWorldFetch(userInput);
    helloWorldResponse.innerText = response;
})