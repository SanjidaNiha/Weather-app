async function getWeather() {
    const country = document.getElementById("country").value;
    const apiKey = "183f53be8b1040958fc55142251702";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=yes`;

    // Clear any previous error or data
    document.getElementById("error-message").textContent = '';
    document.getElementById("location").textContent = '';
    document.getElementById("temperature").textContent = '';
    document.getElementById("condition").textContent = '';

    if (country === "") {
        document.getElementById("error-message").textContent = "Please enter a country name.";
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            document.getElementById("error-message").textContent = data.error.message;
        } else {
            const location = `${data.location.name}, ${data.location.country}`;
            const temperature = `${data.current.temp_c}°C`;
            const condition = data.current.condition.text;

            document.getElementById("location").textContent = location;
            document.getElementById("temperature").textContent = `Temperature: ${temperature}`;
            document.getElementById("condition").textContent = `Condition: ${condition}`;
        }
    } catch (error) {
        document.getElementById("error-message").textContent = "Error fetching weather data. Please try again later.";
    }
}
