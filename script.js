
document.getElementById("run").addEventListener("click", pokemonInfo);

async function pokemonInfo () {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeInfo = document.getElementById("pokemon-id").value;
    let input = pokeInfo;



    let data = await fetch(`${api_url}${input}`)
    let res = await data.json();
    console.log(res)
}
