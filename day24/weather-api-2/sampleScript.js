const url = "https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
