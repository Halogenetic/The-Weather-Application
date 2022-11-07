const weatherForm = document.getElementById('cityName')

const weatherByDay = [[], [], [], [], []]
const weatherByDay2 = [[], [], [], [], []]


const container = document.querySelectorAll('.container')
const container2 = document.querySelectorAll('.container2')

const comparebutton = document.querySelector(".compare")


const getWeather = (cityName) =>{
	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=ac96025e898eaaa90f32fb998527b49f`)
	.then(response => response.json())
	.then((data) => {
		fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=ac96025e898eaaa90f32fb998527b49f`)
		.then(response => response.json())
		.then((data) => {
			let i = 0
			let c = 0
			data.list.forEach((weatherEntry) => {
				if(i < 8){
					weatherByDay[c].push(weatherEntry)
				}else{
					c++
					weatherByDay[c].push(weatherEntry)
					i = 0
				}

				i++

				
			})
      container[0].children[0].innerHTML=(cityName+" Today")
      container[0].children[1].innerHTML=(weatherByDay[0][0].main.temp+"°")
      container[0].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[0][0].weather[0].icon + ".png";
      container[0].children[2].children[1].innerHTML=(weatherByDay[0][0].weather[0].description)
      container[0].children[3].innerHTML=("Humidity: "+ weatherByDay[0][0].main.humidity)
      container[0].children[4].innerHTML=("Wind: "+ weatherByDay[0][0].wind.speed)
      
      container[1].children[0].innerHTML=(cityName+" Tomorrow")
      container[1].children[1].innerHTML=(weatherByDay[1][0].main.temp+"°")
      container[1].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[1][0].weather[0].icon + ".png";
      container[1].children[2].children[1].innerHTML=(weatherByDay[1][0].weather[0].description)
      container[1].children[3].innerHTML=("Humidity: "+ weatherByDay[1][0].main.humidity)
      container[1].children[4].innerHTML=("Wind: "+ weatherByDay[1][0].wind.speed)

      container[2].children[0].innerHTML=(cityName+" the day after")
      container[2].children[1].innerHTML=(weatherByDay[2][0].main.temp+"°")
      container[2].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[2][0].weather[0].icon + ".png";
      container[2].children[2].children[1].innerHTML=(weatherByDay[2][0].weather[0].description)
      container[2].children[3].innerHTML=("Humidity: "+ weatherByDay[2][0].main.humidity)
      container[2].children[4].innerHTML=("Wind: "+ weatherByDay[2][0].wind.speed)

      container[3].children[0].innerHTML=(cityName+" the day after after")
      container[3].children[1].innerHTML=(weatherByDay[3][0].main.temp+"°")
      container[3].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[3][0].weather[0].icon + ".png";
      container[3].children[2].children[1].innerHTML=(weatherByDay[3][0].weather[0].description)
      container[3].children[3].innerHTML=("Humidity: "+ weatherByDay[3][0].main.humidity)
      container[3].children[4].innerHTML=("Wind: "+ weatherByDay[3][0].wind.speed)

      container[4].children[0].innerHTML=(cityName+" the day after after after")
      container[4].children[1].innerHTML=(weatherByDay[4][0].main.temp+"°")
      container[4].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[4][0].weather[0].icon + ".png";
      container[4].children[2].children[1].innerHTML=(weatherByDay[4][0].weather[0].description)
      container[4].children[3].innerHTML=("Humidity: "+ weatherByDay[4][0].main.humidity)
      container[4].children[4].innerHTML=("Wind: "+ weatherByDay[4][0].wind.speed)

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityName + "')";

      const remember = localStorage.setItem("choice", cityName)

      var xyValues = [
        {x:1, y:(weatherByDay[0][0].main.temp)},
        {x:2, y:(weatherByDay[1][0].main.temp)},
        {x:3, y:(weatherByDay[2][0].main.temp)},
        {x:4, y:(weatherByDay[3][0].main.temp)},
        {x:5, y:(weatherByDay[4][0].main.temp)},
      ];
      
      new Chart("myChart", {
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

		})

	})
}

const getWeather2 = (cityName) =>{
	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=ac96025e898eaaa90f32fb998527b49f`)
	.then(response => response.json())
	.then((data) => {
		fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=ac96025e898eaaa90f32fb998527b49f`)
		.then(response => response.json())
		.then((data) => {
			let i = 0
			let c = 0
			data.list.forEach((weatherEntry) => {
				if(i < 8){
					weatherByDay2[c].push(weatherEntry)
				}else{
					c++
					weatherByDay2[c].push(weatherEntry)
					i = 0
				}

				i++

				
			})

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

		})

	})
}

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()
	let formData = Object.fromEntries(new FormData(weatherForm));
	console.log(formData)
	getWeather(formData.city)
})

comparebutton.addEventListener('click', (event) => {
	event.preventDefault()
	let formData = Object.fromEntries(new FormData(weatherForm));
	console.log(formData)
	getWeather2(formData.city)
})


getWeather(localStorage.getItem("choice"))

