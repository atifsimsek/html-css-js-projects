class UI {
  constructor() {
    this.pokedex = document.querySelector("#pokedex");

    this.colors = {
      fire: "#FDDFDF",
      grass: "#DEFDE0",
      electric: "#FCF7DE",
      water: "#DEF3FD",
      ground: "#f4e7da",
      rock: "#d5d5d4",
      fairy: "#fceaff",
      poison: "#d6b3ff",
      bug: "#f8d5a3",
      dragon: "#97b3e6",
      psychic: "#eaeda1",
      flying: "#F5F5F5",
      fighting: "#E6E0D4",
      normal: "#F5F5F5",
      ice: "#e0f5ff ",
    };

    this.main_types = Object.keys(this.colors);
  }



  AddPokemonsUI(pokemon) {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");
    const weight = pokemon.weight;
    const type = this.findPokemonType(pokemon);
    const typeText = this.findPokemonType(pokemon)[0].toUpperCase() + this.findPokemonType(pokemon).slice(1);
    const bgColor = this.colors[type];

    this.createPokemonBox(name, id, weight, typeText, bgColor);

  }


  findPokemonType(pokemon) {

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = this.main_types.find(type => poke_types.indexOf(type) > -1);

    return type;


  }

  createPokemonBox(name, id, weight, typeText, bgColor) {
    const div = document.createElement("div");

    div.setAttribute("class", "pokemon");
    div.style.backgroundColor = `${bgColor}`;


    div.innerHTML =
      `
        <div class="img-box">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
        </div>
        <div class="text">
            <h3 class="name" >${name}</h3>
            <hr>
            <p class ="pokemon-id">${id}</p>
            <p>${weight} Kg</p>
            <p>Type</p>
            <hr class ="type">
            <p>${typeText}</p>
        </div>
       `
    this.pokedex.appendChild(div);

  }
}