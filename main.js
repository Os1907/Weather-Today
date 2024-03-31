var userSearch=document.getElementById("userSearch");
var loader=document.getElementById("loader") ;
var cityData=document.getElementById("cityData") ;
// =============> Get Location Api & Weather Api
async function getapidata(){
var locationUser = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=4dd2d3dd32be4832b3ad7a4686cd458c") ; 
var locaDone = await locationUser.json();
var apiLink =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5f606d13563440c3835153320233012&q=${locaDone.city}&days=7`);
var apiFinal = await apiLink.json();


var cartona =``
var imgcollections=``;

var apiDatetext = ` ${apiFinal.location.localtime} `
var apiDate = new Date(apiDatetext);
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var days = apiDate.getDay();
var daysOftoday = daysOfWeek[days] ;

for (var i = 0; i <1 ; i++){

var apiDatetext2 = ` ${apiFinal.forecast.forecastday[1].date} `
var apiDate2 = new Date(apiDatetext2);
var daysOfWeek2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var days2= apiDate2.getDay();
var daysOftoday2 = daysOfWeek2[days2] ;

// ======================>

var apiDatetext3 = ` ${apiFinal.forecast.forecastday[2].date} `
var apiDate3 = new Date(apiDatetext3);
var daysOfWeek3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var days3= apiDate3.getDay();
var daysOftoday3 = daysOfWeek3[days3] ;


if (apiFinal.current.condition.text=== "Clear"){
    imgcollections = './image/mycollection/moon.png'
} else if (apiFinal.current.condition.text=== "Overcast" || apiFinal.current.condition.text === "Cloudy" || apiFinal.current.condition.text === "Partly cloudy"){
    imgcollections = './image/mycollection/cloudy.png'
}else if (apiFinal.current.condition.text=== "Sunny"){
    imgcollections = './image/mycollection/sunny.png'
}else if (apiFinal.current.condition.text=== "Mist"){
    imgcollections = './image/mycollection/Mist.png'
}else if (apiFinal.current.condition.text=== "Patchy rain possible" || apiFinal.current.condition.text === "Rain" || apiFinal.current.condition.text === "Light rain") {
    imgcollections = './image/mycollection/003-rain.png'
}else if (apiFinal.current.condition.text=== "Freezing fog" || apiFinal.current.condition.text === "Snow") {
    imgcollections = './image/mycollection/snowfall.png'
}
    cartona+=`
    <div class=" col-md-12 col-lg-6  d-flex align-items-center ">
    <div  class="row flex-column gradient-myBg  rounded-5 ">
    <div id="cityDetials"  class="x1 col-md-12  d-flex align-items-center flex-column justify-content-start p-3 rounded-pill ">
    <h5>${daysOftoday}</h5>
    <h1>${apiFinal.location.name}</h1>
    <span >${apiFinal.current.condition.text}</span>
    </div>
    <div class="col-md-12  rounded-pill mt-4 p-1">
    <div class="row justify-content-between  g-3 align-items-center px-5   ">
        <div class=" col-md-8 rounded-5  d-flex align-items-center justify-content-center">
            <h2 class="">${apiFinal.current.feelslike_c}&deg;C</h2>
        </div>
        <div class=" col-md-4 d-flex justify-content-center  rounded-5">
            <img src="${imgcollections}" class="w-75">
        </div>
    </div>
    </div>
    <div class="weather__status col-md-8 m-auto   d-flex flex-row justify-content-center align-items-center  p-4  rounded-5   mb-0">
    <div class=" d-flex justify-content-center align-items-center">
        <img src="./image/mycollection/003-rain.png">
        <span>${apiFinal.forecast.forecastday[0].day.daily_chance_of_rain} %</span> 
    </div>
    <div class=" d-flex justify-content-center align-items-center">
        <img src="./image/mycollection/low-temperature.png">
        <span>${apiFinal.forecast.forecastday[0].day.totalprecip_mm}</span>
    </div>
    <div class=" d-flex justify-content-center align-items-center">
        <img src="./image/mycollection/006-wind.png">
        <span>${apiFinal.forecast.forecastday[0].day.maxwind_kph} km/h</span>
    </div>
    </div>
    </div>
</div>
<div class="col-md-4 lastcards  rounded-5 mt-5 ">
    <div id="cityDetials"  class="main-color nextWeather animation-scale d-flex align-items-center flex-column justify-content-start p-3 rounded-5 ">
        <h5>${daysOftoday2}</h5>
        <h3>${apiFinal.forecast.forecastday[1].day.maxtemp_c}&deg;C</h3>
        <span >${apiFinal.forecast.forecastday[1].day.mintemp_c}&deg;C</span>
    </div>
    <div id="cityDetials"  class="main-color nextWeather animation-scale mt-4  d-flex align-items-center flex-column justify-content-start p-3 rounded-5 ">
        <h5>${daysOftoday3}</h5>
        <h3>${apiFinal.forecast.forecastday[2].day.maxtemp_c}&deg;C</h3>
        <span >${apiFinal.forecast.forecastday[2].day.mintemp_c}&deg;C</span>
    </div>
</div>
    `
}
document.getElementById('cityData').innerHTML=cartona
document.getElementById("cityname").innerHTML+= "Your Location " + `<p class="text-center text-danger d-inline">${locaDone.city}</p>`
} 
getapidata()



