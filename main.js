const baseEndpoint = `https://recipes.beginnerjavascript.com/api`;
const form = document.querySelector("form.search");
async function fetchRecipes(query){
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
    console.log(data)
}

function handleSubmit (e){
    e.preventDefault();
    const form = e.currentTarget;
    //turn the form off
    form.submit.disabled = true;
    // submit the search
    fetchRecipes(form.query.value)
    console.log(form.query.value);
}

form.addEventListener("submit", handleSubmit)
fetchRecipes("pizza")