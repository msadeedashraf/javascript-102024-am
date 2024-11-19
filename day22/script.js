const images = [
    "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg",
    "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg",
    "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];
function updateBackground()
{
const background  = document.getElementById("background");
const randomIndex = Math.floor(Math.random()*images.length );
//console.log(`url('${images[randomIndex]}')`);
background.style.backgroundImage = `url('${images[randomIndex]}')`;
}

function updateTime()
{
const timeDisplay = document.getElementById("timedisplay");
const dateDisplay = document.getElementById("datedisplay");

const currentTime = new Date();
const hours = currentTime.getHours().toString().padStart(2, '0');
const minutes = currentTime.getMinutes().toString().padStart(2, '0');
const seconds = currentTime.getSeconds().toString().padStart(2, '0');

const year = currentTime.getFullYear(); 
const day = currentTime.getDate();

///console.log(currentTime.getMonth());
//console.log(currentTime.getDay());

const weekday = [ "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",];

    const dd = currentTime.getDay();


    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const mm = currentTime.getMonth();


timeDisplay.textContent= `${hours}:${minutes}:${seconds}`;

dateDisplay.textContent = `${weekday[dd]}, ${day} ${month[mm]}, ${year}`;

}


setInterval(updateBackground, 5000)
setInterval(updateTime, 1000)



