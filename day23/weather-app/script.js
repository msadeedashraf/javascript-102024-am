const APIKey = "bf16b8da65ff41a4c8d220d5b961a0e4";

if (navigator.geolocation)
{
navigator.geolocation.getCurrentPosition( (position) => {
    
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //    console.log(`${lat} ------ ${long}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    //fetching api starts

    fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
    console.log(data);

    getWeather(data);
    
    
    })

    //fetching api end
    
}  )


function getWeather(data)
{
    city = data.name;
  
    //city = 'Hamilton,CA';
    //country = 'IT' ;
    
    //console.log();
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    //fetching api starts

    fetch (url)
    .then ((response) => response.json())
    .then ((forecast) => {
    console.log(forecast);

    console.log(forecast.sys.country)
    document.getElementById('city').innerText = `${forecast.name}, ${forecast.sys.country}` ;
    var myTemp = Math.floor(forecast.main.temp-273) ;
    document.getElementById('temperature').innerText = `${myTemp} °C` ;
    
     
    var imgURL = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    document.getElementById('img').src =  imgURL;
    console.log(forecast.weather[0].description);
    document.getElementById('clouds').innerText = forecast.weather[0].description;

    })


}


function searchByCity()
{
    var mycity  = document.getElementById("search").value;
    console.log(mycity);
 //const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${APIKey}`;

    //fetching api starts
/*
    fetch (urlSearch)
    .then ((response) => response.json())
    .then ((searchedForecast) => {
    console.log(searchedForecast);
    getWeather(searchedForecast);
    })
*/
}




}








