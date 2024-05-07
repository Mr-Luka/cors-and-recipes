const baseEndpoint = `https://recipes.beginnerjavascript.com/api`;
const form = document.querySelector("form.search");
async function fetchRecipes(query){
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
    console.log(data)
}

function handleSubmit (e){
    e.preventDefault();
    console.log(e.currentTarget.query)
}

form.addEventListener("submit", handleSubmit)
fetchRecipes("pizza")