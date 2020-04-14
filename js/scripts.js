//Wrap repository array in an IIFE to avoid accidentally accessing the global state
var pokemonRepository = (function () {
    //Creates an empty repository
    var repository = [];
    //Creates a variable to access the pokemon API
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    //Function to add each pokemon and attributes
    function add(pokemon) {
        repository.push(pokemon);
    }

    //Function to pull all pokemon data
    function getAll() {
        return repository;
    }

    //Function to create a list of items from API
    function addListItem(pokemon) {
        //Assigns a variable to the ul list
        var $pokemonList = document.querySelector('ul');
        //Assigns a variable to the list item
        var listItem = document.createElement('li');
        //Assigns a variable to the button
        var button = document.createElement('button');
        //Displays the current pokemon name on their button
        button.innerText = pokemon.name;
        //Adds a CSS class to the button
        button.classList.add('list-button');
        //Nests a button inside the list item
        listItem.appendChild(button);
        //Nests list items inside a ul item
        $pokemonList.appendChild(listItem);
        //Creates an event listener for when the button is clicked
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        })
    }

    //Function to load pokemon list from API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            // JSON used to exchange data back and forth with external servers
            return response.json();
            // If the promise is resolved, .then is run 
                }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
            // If the promise is rejected, .catch is run
        }).catch(function (e) {
            console.error(e);
        })
    }

    // Function to load details for each pokemon:
    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Adds the details to each item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = Object.keys(details.types);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    // Function to console.log pokemon details
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }

    // To return the values that can be accessed to outside the IIFE
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

// To create list of pokemon with their name on the button
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});