const api_key='7897c797fe4cb5ef39a47eed53124c85'
const tempEl = document.querySelector('#temp > span:nth-child(2)')
const humidEl = document.querySelector('#humid > span:nth-child(2)')
const descEl = document.querySelector('#desc > span:nth-child(2)')
const getWeatherData = (e) =>{
    const CITY_NAME = document.getElementById('location-input').value;
    const api_endpoint_to_get_weatherinfo_by_cityname=`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${api_key}`

    e.preventDefault();
    console.log({CITY_NAME});
    axios.get(api_endpoint_to_get_weatherinfo_by_cityname)
    .then(res=>{
        const weatherData = res.data;
        console.log(weatherData);
        const description = weatherData.weather[0].description;
        const temperature =(weatherData.main.temp - 273.15).toFixed(2);
        const humidity = weatherData.main.humidity;
        tempEl.innerText = temperature;
        humidEl.innerText = humidity;
        descEl.innerText = description;

        console.log(tempEl);
        console.log({description,temperature,humidity})
    }).catch(err=>{
        console.log(err);
        alert('Something went wront!')
    })
}

const button = document.getElementById('get-weather-btn');
button.addEventListener('click',getWeatherData);