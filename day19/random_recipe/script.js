//https://www.themealdb.com/api/json/v1/1/random.php





fetch ("https://www.themealdb.com/api/json/v1/1/random.php")
.then ((response) => response.json())
.then ((data) => {
console.log(data);

const meal = data.meals[0];
getRecipes(meal);
})

function getRecipes(meal)
{
    console.log(meal);

    let myHTML = "";


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
                
                <li>${meal.strIngredient1} --- ${meal.strMeasure1}</li>
                <li>${meal.strIngredient2} --- ${meal.strMeasure2}</li>
                <li>${meal.strIngredient3} --- ${meal.strMeasure3}</li>
                <li>${meal.strIngredient4} --- ${meal.strMeasure4}</li>
                <li>${meal.strIngredient5} --- ${meal.strMeasure5}</li>
                <li>${meal.strIngredient6} --- ${meal.strMeasure6}</li>
                <li>${meal.strIngredient7} --- ${meal.strMeasure7}</li>
                <li>${meal.strIngredient8} --- ${meal.strMeasure8}</li>
                <li>${meal.strIngredient9} --- ${meal.strMeasure9}</li>
                <li>${meal.strIngredient10} --- ${meal.strMeasure10}</li>
                <li>${meal.strIngredient11} --- ${meal.strMeasure11}</li>
                <li>${meal.strIngredient12} --- ${meal.strMeasure12}</li>
                <li>${meal.strIngredient13} --- ${meal.strMeasure13}</li>
                <li>${meal.strIngredient14} --- ${meal.strMeasure14}</li>
                <li>${meal.strIngredient15} --- ${meal.strMeasure15}</li>
                <li>${meal.strIngredient16} --- ${meal.strMeasure16}</li>
                <li>${meal.strIngredient17} --- ${meal.strMeasure17}</li>
                <li>${meal.strIngredient18} --- ${meal.strMeasure18}</li>
                <li>${meal.strIngredient19} --- ${meal.strMeasure19}</li>
                <li>${meal.strIngredient20} --- ${meal.strMeasure20}</li>
                
                    
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
                <iframe width="380" height="250" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                
                </iframe>
            </div>
        </div></div>
            </div>`;
            console.log(meal.strYoutube);
            console.log(meal.strYoutube.slice(-11));
document.getElementById("meal").innerHTML = myHTML ;
}




/*
    let myList = "<li>Red Chilli --- 1 large</li><li>Pickle Juice--- 1/4 cup</li><li>Egg--- 1</li><li>Milk--- 1/4 cup</li><li>Flour--- 1/2 cup </li><li>Icing Sugar--- 1 tbs</li><li>Paprika--- 1/2 tsp</li><li>Salt--- 1/2 tsp</li><li>Black Pepper--- 1/4 tsp</li><li>Garlic Powder--- 1/4 tsp</li><li>Celery Salt--- 1/4 tsp</li><li>Cayenne Pepper--- 1/2 tsp</li><li>Olive Oil--- 1 cup </li><li>Sesame Seed Burger Buns--- 1</li><li>---  </li><li>---  </li><li>---  </li><li>---  </li><li>---  </li><li>---  </li>";
*/




















