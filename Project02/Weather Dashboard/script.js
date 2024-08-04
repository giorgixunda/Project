document.addEventListener("DOMContentLoaded", function(){
    const getWeatherButton = document.getElementById("getWeatherButton");
    const cityInput = document.getElementById("cityInput");
    const weatherDiv = document.getElementById("weather");

    getWeatherButton.addEventListener("click", async() => {
        const city = cityInput.value.trim();
        
        if (!city) {
            showError("Please enter a city name.");
            return;
        }

        try {
            const APIKey = "4b548ef1397827a2206f80d25160d2d3";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);

            if (!response.ok) {
                throw new Error("City not found.");
            }

            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } catch (error) {
            showError(error.message);
        }
    });

    function displayWeather(data){
        weatherDiv.textContent = ' ';

        const cityName = document.createElement("h2");
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherDiv.appendChild(cityName); 

        const temp = document.createElement("h2");
        temp.textContent = `Temperature: ${data.main.temp}°C`;
        weatherDiv.appendChild(temp);

        const description = document.createElement("p")
        description.textContent = `Weather: ${capitalizeFirstLetter(data.weather[0].description)}`;
        weatherDiv.appendChild(description);

        const humidity  = document.createElement("p")
        humidity.textContent = `humidity: ${data.main.humidity}%`;
        weatherDiv.appendChild(humidity);

        const windSpeed = document.createElement("p")
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        weatherDiv.appendChild(windSpeed);

        const feelsLike = document.createElement("p")
        feelsLike.textContent = `feelsLike: ${data.main.feels_like}°C`;
        weatherDiv.appendChild(feelsLike);
    }

    function showError(message){
        weatherDiv.textContent = ' ';

        const error = document.createElement("p");
        error.textContent = message;
        error.classList.add("error");
        weatherDiv.appendChild(error);
    }

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});

