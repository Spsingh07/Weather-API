const apiKey = "d56c6e274baa50f45a59c921c62c6a3b" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const input = document.querySelector('input');
const button = document.querySelector('button');
const weatherImg = document.querySelector('.weather-img');

async function showTheWeather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
 if(response.status === 200) {
   let data = await response.json();

   document.querySelector('.city').textContent = data.name;
   document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
   document.querySelector('.windspeed').textContent = data.wind.speed + ' Km/h';
   document.querySelector('.hum').textContent = data.main.humidity + '%';
   
   console.log(data);
  
   if (data.weather[0].main === "Haze") {
      weatherImg.src = 'images/haze.png';
   } else if (data.weather[0].main === "Clouds") {
      weatherImg.src = 'images/clouds.png';
   } else if (data.weather[0].main === "Clear") {
      weatherImg.src = 'images/clear.png';
   }else if (data.weather[0].main === "Mist") {
      weatherImg.src = 'images/mist.png';
   }else if (data.weather[0].main === "Rain") {
      weatherImg.src = 'images/rainy-day.png';
   }
  
   document.querySelector('.weather').style.display = 'block';
   document.querySelector('.error').style.display = 'none';

 } else if(response.status === 404) {
   document.querySelector('.error').style.display = 'block';
   document.querySelector('.weather').style.display = 'none';
 }


}

button.addEventListener('click', function() {
    showTheWeather(input.value);
})

