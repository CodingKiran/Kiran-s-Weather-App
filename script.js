document.querySelector("#searchbox").addEventListener("change", weatherUpdate);

function weatherUpdate() {
  const searchVal = document.querySelector("#searchbox").value;
  const searchValCap = searchVal.toUpperCase();
  const url = `https://api.weatherapi.com/v1/current.json?key=e0b6892e7bef4b52b4152356222304&q=${searchVal}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      document.querySelector(".main-wrapper").classList.add("shadow");
      document.getElementById("header1").innerText = "Current Weather For " + searchValCap;
      document.getElementById("time").innerText = data.location.localtime.slice(11,16);
      document.getElementById("temp-cel").innerText = data.current.temp_c + "°" + "c";
      document.getElementById("icon").src = data.current.condition.icon;
      document.getElementById("text").innerText = data.current.condition.text;
      document.getElementById("feel").innerText = "Feels Like: "+ data.current.feelslike_c + " c";
      document.getElementById("wind").innerText = "Wind:  "+ data.current.wind_kph + " km/h";
      document.getElementById("windgust").innerText = "Wind Gust:  "+ data.current.gust_kph + " km/h";
    
      
      console.log(searchVal);
    });
}
