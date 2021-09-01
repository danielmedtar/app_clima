const API_KEY = '57845ce53bb646cf2d7104af7e32605a';

const fetchData = position => {
    const {latitude, longitude} = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: `${'Ciudad:'} ${data.name}`,
        description: `${'Cielo:'} ${data.weather[0].main}`,
        humidity: `${'Humedad:'} ${data.main.humidity}${'%'}`,
        temperature: `${'Temp:'} ${Math.round(data.main.temp)}${'°'}`,
        feels_like: `${'Sensación:'} ${Math.round(data.main.feels_like)}${'°'}`
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).innerHTML = `<span>${weatherData[key]}</span>`
})
    loading()
}

const loading = () => {
    let contenedor = document.getElementById('contenedor')
    let loader = document.getElementById('loader')

    loader.setAttribute('id', 'ocultar')
    contenedor.setAttribute('id', 'mostrar')
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}