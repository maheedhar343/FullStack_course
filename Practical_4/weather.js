const API_KEY = "5c5aa714bad01eb6fd6492a2334376e3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
let weatherChart;

// Async function to get weather data
const getWeatherData = async (city) => {
    try {
        const url = `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;
        
        const response = await fetch(url);
        
        // Check if response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`City not found or API error (Status: ${response.status})`);
        }
        
        const data = await response.json();
        const { name } = data.city;

        displayWeatherInfo(name, data.list);
    } catch (error) {
        weatherInfo.innerHTML = `<p style="color: #ff6b6b;">${error.message}</p>`;
        if (weatherChart) weatherChart.destroy();
    }
};

// Display weather info
function displayWeatherInfo(cityName, forecastList) {
    const temps = forecastList.slice(0, 7).map(item => item.main.temp);
    const dates = forecastList.slice(0, 7).map(item => new Date(item.dt_txt).toLocaleDateString());

    const { temp, humidity } = forecastList[0].main;
    const { description } = forecastList[0].weather[0];

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Condition:</strong> ${description}</p>
    `;

    plotTemperatureGraph(dates, temps);
}

// Plot temperature graph using Chart.js
const plotTemperatureGraph = (dates, temps) => {
    if (weatherChart) weatherChart.destroy();
    const ctx = document.getElementById("weatherChart").getContext("2d");

    weatherChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "Temperature (°C)",
                data: temps,
                borderColor: "#06b6d4",
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: "#fff" } } },
            scales: {
                x: { ticks: { color: "#fff" } },
                y: { ticks: { color: "#fff" } }
            }
        }
    });
};

getWeatherBtn.addEventListener("click", async () => {
    try {
        const city = cityInput.value.trim();
        if (city) await getWeatherData(city);
    } catch (err) {
        console.error("Error fetching weather:", err);
    }
});

