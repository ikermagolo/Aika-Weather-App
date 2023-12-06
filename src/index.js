

function refreshWeather(response){
    
    let tempElement = document.querySelector('#weather-app-temperature');
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#city");
 
    cityElement.innerHTML = response.data.city;
    tempElement.innerHTML = Math.round(temperature);
    

}



function searchCity(city){

    let apikey = "3d814e4ef189oa5f9c0dta1eabf099a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiUrl).then(refreshWeather);

}


function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector('#search-form-input');


searchCity(searchInput.value);
    

}


let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Mwanza");
 