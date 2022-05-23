

const api_url = "https://pokeapi.co/api/v2/pokemon/ditto"

    async function getPokemon () {
    let data = await fetch(api_url)
        let main = await data.json()
        console.log(main)
    }


getPokemon()

