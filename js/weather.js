let weatherIcon = document.getElementById("weather-icon");
let temperature = document.getElementById("temperature");
let city = document.getElementById("city");
let countryName = document.getElementById("country");
let notification = document.getElementById("notification");

const key = "b5decc838911549f995fee61f543d4f0";

//check browser support
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { country } = data.sys;
          const { name } = data;
          const { icon } = data.weather[0];
          const iconUrl =
            "http://openweathermap.org/img/wn/" + icon + "@2x" + ".png";
          temperature.textContent = temp + "°";
          city.textContent = name + ",";

          weatherIcon.innerHTML = `<img src=${iconUrl}>`;
          console.log(temp);
          console.log(name);
          console.log(country);
          console.log(iconUrl);
          console.log(weatherIcon);
          countryName.textContent = country;
        });
    });
  }
});
