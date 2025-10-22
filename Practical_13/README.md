#### **Experiment 4 - Weather Dashboard Using ES6, Async/Await, and Chart.js**

Explore the features of ES6 like arrow functions, callbacks, promises, async/await. Implement an application for reading the weather information from openweathermap.org and display the information in the form of a graph on the web page.

### Steps:

Create a Weather Dashboard project:

1. Create a project folder, e.g., `WeatherDashboard`.
2. Create a main page `index.html` with:

   * Input field for entering a city name.
   * Section to display current weather.
   * Canvas area for Chart.js line graph.
3. Use JavaScript to fetch data from OpenWeatherMap:

   * Current weather: `/weather?q={city}&units=metric&appid={API_KEY}`
   * 7-day forecast: `/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&units=metric&appid={API_KEY}`
4. Use async/await and arrow functions to handle API calls.
5. Display current weather: temperature, humidity, condition.
6. Plot historical temperature data using Chart.js.
   ![1761131594265](image/README/1761131594265.png)
8. Use CSS3 and responsive layout to make the dashboard mobile-friendly.
   ![1761131723739](image/README/1761131723739.png)
