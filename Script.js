function fetchWeatherData() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the response text to a JavaScript object
            var weatherData = JSON.parse(this.responseText);

            // Call a function to display the data
            displayWeatherData(weatherData);
        }
    };

    // Replace with your actual API endpoint and parameters
    xhr.open("GET", "https://api.example.com/weather?city=London", true);
    xhr.send();
}

function displayWeatherData(data) {
    var weatherDiv = document.getElementById('weatherDisplay');

    // Display data as needed. Here's a simple example:
    weatherDiv.innerHTML = "Temperature: " + data.temperature + "°C";
}
