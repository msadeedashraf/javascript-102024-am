//https://www.themealdb.com/api/json/v1/1/random.php

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const meal = data.meals[0];
    getRecipes(meal);
  });

function getRecipes(meal) {
  console.log(meal);

  let myHTML = "";

  let myListofIngredients = "";

  for (a = 1; a <= 20; a++) {
    if (meal[`strIngredient${a}`]) {
      //console.log(`<li> ${meal[`strIngredient${a}`]} --- ${ meal[`strMeasure${a}`]}</li>`);
      myListofIngredients +=
        "<li>" +
        meal[`strIngredient${a}`] +
        "---" +
        meal[`strMeasure${a}`] +
        "</li>";
    } else {
      break;
    }
  }

  //console.log(myListofIngredients);

  
  myHTML += `<div class="container">
                <h1>Your Today's Meal</h1>
                
                <div id="meal" class="row meal"><div class="row">
            <div class="columns five">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="Meal Image">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Tags:</strong>${meal.strTags} </p>
                <h5>Ingredients:</h5>
                
                <ul>
                
               
            ${myListofIngredients}
                
                    
                </ul>
                
            </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        
        <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
                <iframe width="380" height="250" src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}">
                
                </iframe>
            </div>
        </div></div>
            </div>`;
 // console.log(meal.strYoutube);
 // console.log(meal.strYoutube.slice(-11));
  document.getElementById("meal").innerHTML = myHTML;
}

/*
    let myListofIngredients = "<li>Red Chilli --- 1 large</li><li>Pickle Juice--- 1/4 cup</li><li>Egg--- 1</li><li>Milk--- 1/4 cup</li><li>Flour--- 1/2 cup </li><li>Icing Sugar--- 1 tbs</li><li>Paprika--- 1/2 tsp</li><li>Salt--- 1/2 tsp</li><li>Black Pepper--- 1/4 tsp</li><li>Garlic Powder--- 1/4 tsp</li><li>Celery Salt--- 1/4 tsp</li><li>Cayenne Pepper--- 1/2 tsp</li><li>Olive Oil--- 1 cup </li><li>Sesame Seed Burger Buns--- 1</li><li>---  </li><li>---  </li><li>---  </li><li>---  </li><li>---  </li><li>---  </li>";
*/
