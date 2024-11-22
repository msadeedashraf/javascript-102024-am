async function getdata() {
  let city = document.getElementById("searchTxt").value;
  let lat = "";
  let long = "";

  if (city == "") {
    city = "Toronto,ca";
  }

  console.log(city);

  var myCord = [];

  var myUrl = [];
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      myCord.push(latitude);
      const longitude = position.coords.longitude;
      myCord.push(longitude);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const url = `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`;
      myUrl.push(url);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  console.log(this.myUrl);

  //const actualURL = myUrl.pop();
  //console.log("My Actual Url" + actualURL);

  //const url = `https://open-weather13.p.rapidapi.com/city/latlon/${myCord[0]}/${myCord[1]}`;
  //console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(myUrl, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  
  
}


function getWeekDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  document.getElementById("weekDay").innerHTML = day;
}
