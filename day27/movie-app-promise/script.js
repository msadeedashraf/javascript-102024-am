const get_movies = (value = "superman") => {
  return new Promise ((resolve, reject)=>{
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response)=> response.json())
    .then((data)=>{
      console.log(data);

      if (data._embedded.episodes.length > 0)
      {
        const episodes_data = data._embedded.episodes.slice(0,4);
        console.log(episodes_data);

        create_header_UI(data);
        create_episodes_UI(episodes_data);
        resolve(data);
      }
      else
      {
        create_header_UI(data)
        document.getElementById("episodes").innerHTML = `<p>No Episode Data Found for your selection</p>`;
        resolve(data);
      }
      
      
    })
    .catch(
      (error)=>{
        reject(error);
      }
    );
  });
};

get_movies("spiderman")


const search = (event)=>{
  event.preventDefault();// Stops the form from submitting
  const movie_name = document.querySelector(".header_form-input").value;
  get_movies(movie_name)
       .then ((data) => {
        console.log("Movie data fetched successfully:", data);
       })
       .catch((error) => {
        console.error("Error fetching movie data:", error);
       });
}




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





}


const create_episodes_UI = (episodes_data) =>
{

//console.log(episodes_data[0].name);
//console.log(episodes_data[0].url);
//console.log(episodes_data[0].image.original);




let myEpisodesHTML = ``;

for (let i = 0 ; i <episodes_data.length ; i++)
{
  //episode = episodes_data[i];

myEpisodesHTML += `<li><a title="${episodes_data[i].name}" href="${episodes_data[i].url}"><img src="${episodes_data[i].image?.original ? episodes_data[i].image.original : "images/deafult_epi_image.jpg"  }"/></a></li>`;
}


document.getElementById("episodes").innerHTML = myEpisodesHTML ;



}



/*
//API Call using promise
const get_movies = (value = "superman") => {
  return new Promise ((resolve, reject)=>{
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response)=> response.json())
    .then((data)=>{
      console.log(data);
      resolve(data);
    })
    .catch(
      (error)=>{
        reject(error);
      }
    );
  });
};

get_movies("mission");

//also for monkeys

const get_monkey = () => {
  return new Promise ((resolve, reject)=>{
    fetch(`https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json`)
    .then((response)=> response.json())
    .then((data)=>{
      console.log(data);
      resolve(data);
    })
    .catch(
      (error)=>{
        reject(error);
      }
    );
  });
};

get_monkey();

*/
