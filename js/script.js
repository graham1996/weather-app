console.log('hello')
// get elements
// const container = 
// document.getElementById('container')

const apiKey = '974cc7bb4538b64b64af9976e8b80e9e'
const tempEl = document.getElementById('temperature')
const humiEl = document.getElementById('humidity')
const windEl = document.getElementById('wind')
const indexEl = document.getElementById('index')
const formEl = document.getElementById('form')
const cityInput = document.getElementById('city-input')
const searchButt = document.getElementById('search')
let city = document.getElementById('city')

// day 1 el

const tempEl1 = document.getElementById('temperature1')
const humiEl1 = document.getElementById('humidity1')
const windEl1 = document.getElementById('wind1')
const indexEl1 = document.getElementById('index1')

// day 2 el

const tempEl2 = document.getElementById('temperature2')
const humiEl2 = document.getElementById('humidity2')
const windEl2 = document.getElementById('wind2')
const indexEl2 = document.getElementById('index2')

// day 3 el

const tempEl3 = document.getElementById('temperature3')
const humiEl3 = document.getElementById('humidity3')
const windEl3 = document.getElementById('wind3')
const indexEl3 = document.getElementById('index3')

// day 4 el

const tempEl4 = document.getElementById('temperature4')
const humiEl4 = document.getElementById('humidity4')
const windEl4 = document.getElementById('wind4')
const indexEl4 = document.getElementById('index4')

// day 5 el

const tempEl5 = document.getElementById('temperature5')
const humiEl5 = document.getElementById('humidity5')
const windEl5 = document.getElementById('wind5')
const indexEl5 = document.getElementById('index5')

// functions

function getWeather(lat, lon, cityName) {

    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=974cc7bb4538b64b64af9976e8b80e9e&units=${units}`
    fetch(path)

        .then(res => res.json())
        .then(json => {

            console.log(json)
            console.log(json.current.temp)
            console.log(json.current.uvi)
            console.log(json.current.humidity)
            console.log(json.current.wind_speed)
            console.log(json.daily[0].wind_speed)

            // current info

            city.innerHTML = cityName
            tempEl.innerHTML = `<span>${json.current.temp}F°</span>`
            humiEl.innerHTML = `<span>Humidity: ${json.current.humidity}%</span>`
            windEl.innerHTML = `<span>Wind speed: ${json.current.wind_speed} mph</span>`
            indexEl.innerHTML = `<span>UV index: ${json.current.uvi}</span>`

            // 5-day info

            // day 1

            tempEl1.innerHTML = `<span>${json.daily[0].temp.day}F°`
            humiEl1.innerHTML = `<span>Humidity: ${json.daily[0].humidity}%</span>`
            windEl1.innerHTML = `<span>Wind speed: ${json.daily[0].wind_speed} mph</span>`
            indexEl1.innerHTML = `<span>UV index: ${json.daily[0].uvi}</span>`

            // day 2

            tempEl2.innerHTML = `<span>${json.daily[1].temp.day}F°`
            humiEl2.innerHTML = `<span>Humidity: ${json.daily[1].humidity}%</span>`
            windEl2.innerHTML = `<span>Wind speed: ${json.daily[1].wind_speed} mph</span>`
            indexEl2.innerHTML = `<span>UV index: ${json.daily[1].uvi}</span>`

            // day 3

            tempEl3.innerHTML = `<span>${json.daily[2].temp.day}F°`
            humiEl3.innerHTML = `<span>Humidity: ${json.daily[2].humidity}%</span>`
            windEl3.innerHTML = `<span>Wind speed: ${json.daily[2].wind_speed} mph</span>`
            indexEl3.innerHTML = `<span>UV index: ${json.daily[2].uvi}</span>`

            // day 4

            tempEl4.innerHTML = `<span>${json.daily[3].temp.day}F°`
            humiEl4.innerHTML = `<span>Humidity: ${json.daily[3].humidity}%</span>`
            windEl4.innerHTML = `<span>Wind speed: ${json.daily[3].wind_speed} mph</span>`
            indexEl4.innerHTML = `<span>UV index: ${json.daily[3].uvi}</span>`

            // day 5

            tempEl5.innerHTML = `<span>${json.daily[4].temp.day}F°`
            humiEl5.innerHTML = `<span>Humidity: ${json.daily[4].humidity}%</span>`
            windEl5.innerHTML = `<span>Wind speed: ${json.daily[4].wind_speed} mph</span>`
            indexEl5.innerHTML = `<span>UV index: ${json.daily[4].uvi}</span>`

           

        })

        .catch(err => console.log(err.message))

}


// event listener for search button

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    let city = cityInput.value
    getLatAndLong(city)


     // add city name local storage, retrigger the initial functions so that the name can be clicked and the info will pop back 

    // localStorage.setItem('city')
    // document.getElementById()
})


function getLatAndLong(cityName) {
    const apiCall = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=974cc7bb4538b64b64af9976e8b80e9e`;

    fetch(apiCall)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data[0].lat)
            console.log(data[0].lon)

            getWeather(data[0].lat, data[0].lon, cityName);
        })
}

