
document.getElementById("run").addEventListener("click", pokemonInfo);

async function pokemonInfo () {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeInfo = document.getElementById("pokemon-id").value;
    let input = pokeInfo;



    let data = await fetch(`${api_url}${input}`)
    let res = await data.json();
    console.log(res)



    let name = document.getElementById("pokemon-name");
    name.innerText = res.name;

    let move = document.getElementById("moves");
    move.innerText = `${res.moves[1].move.name}, ${res.moves[2].move.name}, ${res.moves[3].move.name}, ${res.moves[4].move.name}`;


     let id = document.getElementById("id");
     id.innerText = res.id;


    // let pokemonImage = new Image;
    // pokemonImage.src = res.sprites.back_default;
    //  document.getElementById("pokemon-img").append(pokemonImage);


    function AddImage(){
        const imageCont = document.getElementById("pokemon-img")
        let pokeImg = new Image();
        pokeImg.src = res.sprites.back_default;
        imageCont.innerHTML = '';
        imageCont.appendChild(pokeImg);
    }

    AddImage()


}



