// importar wrapper do spotify
const axios = require('axios')

class Pokemon {
  constructor(id) {
    this.id = id
  }

  searchPokemonById(id) {
    // return wrapper.acharArtista('slash')

    return axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
      .then((response) => response.data)
      .catch((error) => error)
  }
}

module.exports = Pokemon
