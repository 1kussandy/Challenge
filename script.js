function getWeather(city) {
    const apiKey = 'qgidBFDHjJcCrk21AiVh0F4PPw53G9Y9'; // Replace with your actual API key
    const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temperature = data.data.timelines[0].intervals[0].values.temperature;
    weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>`;
  }
  