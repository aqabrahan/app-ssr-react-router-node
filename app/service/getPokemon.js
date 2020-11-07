import axios from 'axios';

const getPokemon = {
  withAbility: (ability) => {
    const baseUrl = 'http://pokeapi.co/api/v2/ability';

    return axios.get(`${baseUrl}/${ability}`);
  }
};

export default getPokemon;