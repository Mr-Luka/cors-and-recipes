const baseEndpoint = `https://recipes.beginnerjavascript.com/api`;
const form = document.querySelector("form.search");
async function fetchRecipes(query){
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit (e){
    e.preventDefault();
    const el = e.currentTarget;
    console.log(el.query.value);
    //turn the form off
    el.submit.disabled = true;
    // submit the search
    const recipes = await fetchRecipes(form.query.value)
    console.log(recipes)
    el.submit.disabled = false;
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
        </div>`
    )
    console.log(html)
}

form.addEventListener("submit", handleSubmit)
fetchRecipes("pizza")