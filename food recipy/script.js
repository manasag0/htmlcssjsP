const API_KEY = "1a63e12b7b884e86895e946f8bfac83d";
const recipeLIstEl = document.getElementById('recipe-list')
function displayRecipes(recipes){
    recipeLIstEl.innerHTML ="";
    recipes.forEach(recipe => {
        //list item recipe bucket
        const recipeItemEl = document.createElement('li');
        recipeItemEl.classList.add("recipe-item");
        //image
        const recipeImageEl = document.createElement('img');
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = `${recipe.title}`;

        //recipe title
        const recipeTitleEl = document.createElement('h2');
        recipeTitleEl.textContent = `${recipe.title}`;
        
        //ingredients list

        const recipeIngredientsEl = document.createElement('p')
        recipeIngredientsEl.innerHTML =`<strong>Ingredients: </strong> ${recipe.extendedIngredients
            .map((ingredient)=>ingredient.original)
            .join(", ")}`;

        //add the url
        const recipeLinkEl = document.createElement('a');
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe"


        recipeLIstEl.appendChild(recipeItemEl);
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl)
        //name
    });
}



async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}


async function init(){
    const recipes =await getRecipes()
    displayRecipes(recipes)
}
init()