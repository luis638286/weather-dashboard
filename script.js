async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY_HERE"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>☁️ ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
  }
}
