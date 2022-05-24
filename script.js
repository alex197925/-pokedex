
document.getElementById("run").addEventListener("click", pokemonInfo);

async function pokemonInfo () {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeInfo = document.getElementById("pokemon-id").value;
    let input = pokeInfo;



    let data = await fetch(`${api_url}${input}`)
    let res = await data.json();
    let moves = res.moves;
    // console.log(res.moves[0].move.name)
    // console.log(moves);



    let name = document.getElementById("pokemon-name");
    name.innerText = res.name;

   .await


     let id = document.getElementById("id");
     id.innerText = res.id;


    function AddImage(){
        const imageCont = document.getElementById("pokemon-img")
        let pokeImg = new Image();
        pokeImg.src = res.sprites.back_default;
        imageCont.innerHTML = '';
        imageCont.appendChild(pokeImg);
    }

    AddImage()

function addMove() {
    // console.log(moves);
    for (let i = 0; i < moves.length; i++){
        let allMoves = document.getElementById("moves");
        allMoves.innerHTML = moves[i].move.name;
        console.log(allMoves)

    }

}

addMove()


}



