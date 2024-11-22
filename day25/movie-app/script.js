value = "girl";

fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
.then((response) => response.json())
.then((data) => {
  console.log(data);
})