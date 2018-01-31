angular. module('pokemon').service('characterSvc', function($http){
    this.getCharacter = function(id){
        return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
            return {
                name: response.data.name,
                weight: response.data.weight,
                pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
        })
    }
})