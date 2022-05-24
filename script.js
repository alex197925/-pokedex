
document.getElementById("run").addEventListener("click", pokemonInfo);

async function pokemonInfo () {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeInfo = document.getElementById("pokemon-id").value;
    let input = pokeInfo;



    let data = await fetch(`${api_url}${input}`)
    let res = await data.json();
    // let moves = res.moves;
    // console.log(res.moves[0].move.name)
    // console.log(moves);



    let name = document.getElementById("pokemon-name");
    name.innerText = res.name;

    let move = document.getElementById("moves");
    move.innerText = `${res.moves[1].move.name}, ${res.moves[2].move.name}, ${res.moves[3].move.name}, ${res.moves[4].move.name}`;


     let id = document.getElementById("id");
     id.innerText = res.id;


    function AddImage(){
        const imageCont = document.getElementById("pokemon-img")
        let pokeImg = new Image();
        pokeImg.src = res.sprites.other.home.front_default;
        imageCont.innerHTML = '';
        imageCont.appendChild(pokeImg);
    }

    AddImage()



function addMove() {
        let moves = [];
    for (let i = 0; i < 4; i++){
        document.getElementById("moves");
        moves.push(res.moves[i].move.name);
        console.log(moves);

    }

}

addMove()


}



