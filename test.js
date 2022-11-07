container2[0].children[0].innerHTML=(cityName+" Today")
container2[0].children[1].innerHTML=(weatherByDay2[0][0].main.temp+"°")
container2[0].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[0][0].weather[0].icon + ".png";
container2[0].children[2].children[1].innerHTML=(weatherByDay2[0][0].weather[0].description)
container2[0].children[3].innerHTML=("Humidity: "+ weatherByDay2[0][0].main.humidity)
container2[0].children[4].innerHTML=("Wind: "+ weatherByDay2[0][0].wind.speed)

container2[1].children[0].innerHTML=(cityName+" Tomorrow")
container2[1].children[1].innerHTML=(weatherByDay2[1][0].main.temp+"°")
container2[1].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[1][0].weather[0].icon + ".png";
container2[1].children[2].children[1].innerHTML=(weatherByDay2[1][0].weather[0].description)
container2[1].children[3].innerHTML=("Humidity: "+ weatherByDay2[1][0].main.humidity)
container2[1].children[4].innerHTML=("Wind: "+ weatherByDay2[1][0].wind.speed)

container2[2].children[0].innerHTML=(cityName+" the day after")
container2[2].children[1].innerHTML=(weatherByDay2[2][0].main.temp+"°")
container2[2].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[2][0].weather[0].icon + ".png";
container2[2].children[2].children[1].innerHTML=(weatherByDay2[2][0].weather[0].description)
container2[2].children[3].innerHTML=("Humidity: "+ weatherByDay2[2][0].main.humidity)
container2[2].children[4].innerHTML=("Wind: "+ weatherByDay2[2][0].wind.speed)

container2[3].children[0].innerHTML=(cityName+" the day after after")
container2[3].children[1].innerHTML=(weatherByDay2[3][0].main.temp+"°")
container2[3].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[3][0].weather[0].icon + ".png";
container2[3].children[2].children[1].innerHTML=(weatherByDay2[3][0].weather[0].description)
container2[3].children[3].innerHTML=("Humidity: "+ weatherByDay2[3][0].main.humidity)
container2[3].children[4].innerHTML=("Wind: "+ weatherByDay2[3][0].wind.speed)

container2[4].children[0].innerHTML=(cityName+" the day after after after")
container2[4].children[1].innerHTML=(weatherByDay2[4][0].main.temp+"°")
container2[4].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[4][0].weather[0].icon + ".png";
container2[4].children[2].children[1].innerHTML=(weatherByDay2[4][0].weather[0].description)
container2[4].children[3].innerHTML=("Humidity: "+ weatherByDay2[4][0].main.humidity)
container2[4].children[4].innerHTML=("Wind: "+ weatherByDay2[4][0].wind.speed)

document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityName + "')";

const remember = localStorage.setItem("choice", cityName)

var xyValues = [
  {x:1, y:(weatherByDay2[0][0].main.temp)},
  {x:2, y:(weatherByDay2[1][0].main.temp)},
  {x:3, y:(weatherByDay2[2][0].main.temp)},
  {x:4, y:(weatherByDay2[3][0].main.temp)},
  {x:5, y:(weatherByDay2[4][0].main.temp)},
];

new Chart("chart2", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      data: xyValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 1, max:5}}],
      yAxes: [{ticks: {min: -5, max:30}}],
    }
  }
});