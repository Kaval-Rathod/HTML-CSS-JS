const apiKey = "f10bdd6ebe07b82471da2d06d87f1dbc";
const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".wether_icon")

async function checkWeather(city) {
  const apiUrl = `${baseApiUrl}?&units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

//   if (response.ok) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".win").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        wetherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        wetherIcon.src = "images/clear.png"

    }
    else if(data.weather[0].main == "Rain"){
        wetherIcon.src = "images/rain.png"

    }
    else if(data.weather[0].main == "Drizzle"){
        wetherIcon.src = "images/drizzle.png"

    }
    else if(data.weather[0].main == "Mist"){
        wetherIcon.src = "images/mist.png"

    }
  }
  
//   else {
//     console.log("Error:", data.message);
//   }
// }

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Call checkWeather initially with a default city
checkWeather("London");