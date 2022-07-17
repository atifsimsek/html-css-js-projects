class Request {
  constructor(url) {
    this.url = url;
  }

  async GetPokemons(id) {
    const data = await fetch(this.url+"/"+id);
    const pokemon = await data.json();
   
    return pokemon;
    
  }
}
