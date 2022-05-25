
document.getElementById("run").addEventListener("click", pokemonInfo);

async function pokemonInfo () {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeInfo = document.getElementById("pokemon-id").value;
    let input = pokeInfo;


    let data = await fetch(`${api_url}${input}`)
    let res = await data.json();


    //Evolution
    let evoData = await fetch(res.species.url);
    let evoRes = await evoData.json();


    let chainData = await fetch(evoRes.evolution_chain.url);
    let chainRes = await chainData.json()
    // console.log(chainRes);



     function displayEvolution () {
          let evolvesTo1 = chainRes.chain.evolves_to[0].evolves_to[0].species.name;
          document.getElementById("evolution1").innerHTML = evolvesTo1;
          let evolvesTo2 = chainRes.chain.evolves_to[0].species.name;
         document.getElementById("evolution2").innerHTML = evolvesTo2;
        let evolvesTo3 = chainRes.chain.species.name;
         document.getElementById("evolution3").innerHTML = evolvesTo3;

         console.log(evolvesTo1);
         console.log(evolvesTo2);
         console.log(evolvesTo3);
   }



displayEvolution()

    // evolution_details

















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
        // console.log(moves);

    }

}

addMove()


}



