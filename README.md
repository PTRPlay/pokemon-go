# Pokedex

This project is a simple single page app. The main purpose is to implement a source of info about pokemons using [PokeApi](http://pokeapi.co/).

## Technologies and libraries

* React
* Bootstrap
* Axios

---

## How to run client app

1. Firstly, you see a page with first chunk of 12 pokemons and filtering buttons.

![First step](public/pokemons1.png)

2. You can add more pokemons to your page if needed at the bottom of the page.

![Second step](secondStep.png)

3. You are free to filter your pokemon's by their types, to see all pokemons tap 'Load more...'

![Third step](file:///D:/Private/thridStep.png)

4. Tap on whatever pokemon you like and you will see its info on the right. This pokemon is sticky so you don't need to worry to scroll up all the time.

![Fourth step one](file:///D:/Private/fourthstepOne.PNG)

![Fourth step two](file:///D:/Private/fourthstepTwo.PNG)

## API used

* https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12
* https://pokeapi.co/api/v2/pokemon/{{id}}
* https://pokeres.bastionbot.org/images/pokemon/{{id}}.png
* https://pokeapi.co/api/v2/type?limit=999
