

const get_movies = (value = "superman") => {
fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
.then((response) => response.json())
.then((data) => {
  
  console.log(data);
  console.log(data._embedded.episodes);
  
 
    //const episodes_data = data._embedded.episodes.slice(0,4);
    //console.log(episodes_data);
    create_header_UI(data);
    //create_episodes_UI(data);

})


}






get_movies("girl");



/*
function create_header_UI(data)
{
}
*/
const create_header_UI = (data) => {

const movie_img = document.querySelector("#img_src")
movie_img.src = data.image.original;


const movie_icon = document.querySelector("#img_icon")
movie_icon.src = data.image.medium;


const movie_title = document.querySelector(".movie_title")
movie_title.textContent = data.name;


const movie_desc = document.querySelector(".movie_desc")
movie_desc.innerHTML = data.summary;

const movie_url = document.querySelector(".btn")
movie_url.href = data.officialSite;


const movie_date = document.querySelector("#movie_date");
const movie_rating = document.querySelector("#movie_rating");
const movie_runtime = document.querySelector("#movie_runtime");
const movie_status = document.querySelector("#movie_status");

movie_date.textContent = data.premiered;
movie_rating.textContent = data.rating.average;
movie_runtime.textContent = data.runtime;
movie_status.textContent = data.status;



//Episode Code start here
console.log(data._embedded.episodes.slice(0,4));

const episodes_data = data._embedded.episodes.slice(0,4);
//console.log(episodes_data[0].name);
//console.log(episodes_data[0].url);
//console.log(episodes_data[0].image.original);


let myEpisodesHTML = ``;

for (let i = 0 ; i <episodes_data.length ; i++)
{
  //episode = episodes_data[i];

myEpisodesHTML += `<li><a title="${episodes_data[i].name}" href="${episodes_data[i].url}"><img src="${episodes_data[i].image.original}"/></a></li>`;
}


document.getElementById("episodes").innerHTML = myEpisodesHTML ;


}
/*
function create_episodes_UI(episodes_data)
{
}
*/

const create_episodes_UI = (data) =>
{



}
