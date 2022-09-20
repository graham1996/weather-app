console.log('hello')
// get elements
const apiKey = '974cc7bb4538b64b64af9976e8b80e9e'
const tempEl = document.getElementById('temperature')
const humiEl = document.getElementById('humidity')
const windEl = document.getElementById('wind')
const indexEl = document.getElementById('index')
const formEl = document.getElementById('form')
const cityInput = document.getElementById('city-input')
const searchButt = document.getElementById('search')
let city = document.getElementById('city')

// functions

function getWeather(lat, lon, cityName, current) {
    
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=974cc7bb4538b64b64af9976e8b80e9e&units=${units}`
    fetch(path)
    
    .then(res => res.json())
    .then(json => {
        // successCallback(json)
        console.log(json)
        console.log(json.current.temp)

        city.innerHTML= cityName
        tempEl.innerHTML = data.main.temp
        humiEl.innerHTML = `Humidity: <span>${humidity}<span>`
        windEl.innerHTML = `Wind Speed: <span>${windEl}<span>`
        indexEl.innerHTML = `UV Index: <spann>${indexEl}<span>`
        
    })

    .catch(err => console.log(err.message))
   
}


// event listeners
        formEl.addEventListener('submit', (e) => {
            e.preventDefault()
            let city = cityInput.value
            // let humidity = humidity.data
            getLatAndLong(city)
        })


function getLatAndLong(cityName) {
    const apiCall = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=974cc7bb4538b64b64af9976e8b80e9e`;

    fetch(apiCall)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data[0].lat)
        console.log(data[0].lon)
        console.log(data[0].humidity)
        getWeather(data[0].lat, data[0].lon, cityName);
    })
}
