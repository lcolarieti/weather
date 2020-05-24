
export const utils = {

  getLocation: () => {

    return new Promise((resolve, reject) => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }),
          err => resolve(null),
          {
            enableHighAccuracy: true,
            timeout: 30000
          }
        );
      } else {
        resolve(null);
      }

    });

  },

  getWeatherData: (coords) => {

    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=current,minutely&appid=00d99f53b6d1162490f8cd52e5edda7d&units=metric`)
        .then(response => response.json())
        .then(data => resolve(data));
    });

  },

  timestampToHour: (timestamp) => {
    let hours   = new Date(timestamp * 1000).getHours(),
        minutes = new Date(timestamp * 1000).getMinutes();
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  }

};
