
var pokemonRepository = (function() {
var repository = [
    {
        name: 'Pikachu',
        pokedexNumber: 25,
        height: 0.4,
        types: ['electric'],
    },
    {
        name: 'Dragonite',
        pokedexNumber: 149,
        height: 2.2,
        types: ['dragon', 'flying']
    },
    {
        name: 'Zapdos',
        pokedexNumber: 145,
        height: 1.6,
        types: ['electric', 'flying'],
    }
];

var $pokemonList = document.querySelector('ul');

function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('list-button');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
};

function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();





pokemonRepository.getAll().forEach(function (currentItem) {
    pokemonRepository.addListItem(currentItem);
})



/*This is an Object.keys forEach loop

Object.keys(repository).forEach(function (currentPokemon) {
    document.write(repository[currentPokemon]);
});
*/


/* This is a for loop

for (var i = 0; i < repository.length; i++) {

    if (repository[i].height >= 2.2) {
        document.write(repository[i].name + ' (height: ' + repository[i].height + ')' + ' - Wow, that\'s big!' + '<br>');
    } else {
        document.write(repository[i].name + ' (height: ' + repository[i].height + ')' + '<br>');

    }
}
*/

