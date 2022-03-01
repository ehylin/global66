import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemones: [],
    pokemonesFilter: [],
    PokemonesDetalls: [],
    favorites: {},
    loading: false
  },
  mutations: {
    setPokemones(state , payload){
      state.pokemones = payload
    },
    setPokemonesFilter(state, payload){
      state.pokemonesFilter = payload
    },
    setFavorites(state, payload){
      state.favorites[payload.name] = payload
    },
    setPokemonesDetalls(state, payload){
      state.PokemonesDetalls = payload
    }
  },
  actions: {
    async getPokemones({ commit }) {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        commit('setPokemones',  data.results)
        commit('setPokemonesFilter',  data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async getPokemonesDetalls({ commit }, name) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        commit('setPokemonesDetalls',  data)
        console.log(data.res)
      } catch (error) {
        console.log(error)
      }
    },
    addFavorite({commit, state}, pokemones){
      state.favorites.propertyIsEnumerable.call(pokemones.name)
     ? pokemones.favorite = state.favorites[pokemones.name].favorite = false
      : pokemones.favorite = true
      commit('setFavorites', pokemones)
    },
    filterName({commit, state}, search){
      const textSearch = search.toLowerCase()
      const filtro = state.pokemones.filter(pokemon => {
      const textApi = pokemon.name.toLowerCase()
      if (textApi.includes(textSearch)) {
        return pokemon;
      }
      })
      commit('setPokemonesFilter', filtro)
    },
  },
  modules: {
  }
})
