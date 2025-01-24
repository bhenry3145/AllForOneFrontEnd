const restaurantResponse = document.getElementById('restaurantResponse');
const mexicanBtn = document.getElementById('mexicanBtn');
const chineseBtn = document.getElementById('chineseBtn');
const fastFoodBtn = document.getElementById('fastFoodBtn');
let userInput = "";

const RestaurantPickerFetch = async (userInput) => {
    const promise = await fetch(`https://bhenryallforone-gcctapd4gtevcycj.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${userInput}`);
    const data = await promise.text();
    return data;
}

mexicanBtn.addEventListener('click', async (event) => {
    userInput = "Mexican";
    let response = await RestaurantPickerFetch(userInput);
    restaurantResponse.innerText = response;
})

chineseBtn.addEventListener('click', async (event) => {
    userInput = "Chinese";
    let response = await RestaurantPickerFetch(userInput);
    restaurantResponse.innerText = response;
})

fastFoodBtn.addEventListener('click', async (event) => {
    userInput = "Fast Food";
    let response = await RestaurantPickerFetch(userInput);
    restaurantResponse.innerText = response;
})