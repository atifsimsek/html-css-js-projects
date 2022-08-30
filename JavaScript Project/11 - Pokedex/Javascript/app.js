const input = document.querySelector("#search");
const pokedex = document.querySelector("#pokedex");

const request = new Request("https://pokeapi.co/api/v2/pokemon");
const ui = new UI;
const pokemonCount = 152;


//Search Process
input.addEventListener("keyup", () => {
    const filterValue = input.value.toLowerCase();
    const pokemonNames = document.querySelectorAll(".name");
        

  pokemonNames.forEach(item => {

    const name = item.textContent.toLocaleLowerCase();
    if(name.indexOf(filterValue) === -1)

    {
        item.parentElement.parentElement.style.display = "none"
    }
    else{
        item.parentElement.parentElement.style.display = "flex"
    }
  });



})

// Get Pokemons From Request and Send to UI
const getAllPokemons = async () => {
    for (let i = 1; i < pokemonCount; i++) {
        await request.GetPokemons(i)
            .then(pokemon => ui.AddPokemonsUI(pokemon))
            .catch(err => console.log(err));

    }

}

getAllPokemons();









