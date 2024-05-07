const baseEndpoint = `https://recipes.beginnerjavascript.com/api`;
const form = document.querySelector("form.search");
const recipesGrid = document.querySelector(".recipes");
async function fetchRecipes(query){
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit (e){
    e.preventDefault();
    const el = e.currentTarget;
    console.log(el.query.value);
    fetchAndDisplay(form.query.value)
}

async function fetchAndDisplay(query){
    //turn the form off
    form.submit.disabled = true;
    // submit the search
    const recipes = await fetchRecipes(form.query.value)
    console.log(recipes)
    form.submit.disabled = false;
    displayRecipes(recipes.results)
}

function displayRecipes(recipes) {
    console.log("creating HTML")
    const html = recipes.map(recipe=>
         `<div class="recipe">
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            ${recipe.thumbnail && 
                `<img src="${recipe.thumbnail}"
                    alt="${recipe.title}"/>`}
                    <a href="${recipe.href}">View Recipe</a>
        </div>`
    )
    console.log(html)
    recipesGrid.innerHTML = html.join("");
}

form.addEventListener("submit", handleSubmit)
fetchAndDisplay("pizza")