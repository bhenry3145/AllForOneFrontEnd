const magic8BallEnter = document.getElementById('magic8BallEnter');
const magic8BallInput = document.getElementById('magic8BallInput');
const magic8BallResponse = document.getElementById('magic8BallResponse');
let userInput = "";

const Magic8BallFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/Magic8Ball/EightBall/${userInput}`);
    const data = promise.text();
    return data;
}

magic8BallEnter.addEventListener('click', async (event) => {
    userInput = magic8BallInput.value;
    let response = await Magic8BallFetch(userInput);
    magic8BallResponse.innerText = response;
})