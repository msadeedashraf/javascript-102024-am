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
    
    
    })

    //fetching api end
    
}  )

}








