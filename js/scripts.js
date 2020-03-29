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

repository.forEach(function (currentPokemon) {
    document.write(currentPokemon.name + '<br/>' + 'Pokedex Number: ' + currentPokemon.pokedexNumber + '<br/>' + 'Height: ' + currentPokemon.height + '<br/>' + 'Type(s): ' + currentPokemon.types + '<hr/>');
});


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

