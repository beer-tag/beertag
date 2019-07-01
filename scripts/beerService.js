/* global requester sessionStorage */

let beersService = (() => {
  function loadBeers () {
    return requester.get('appdata', 'beers', 'kinvey')
  }

  function loadBeerDetails (beerId) {
    return requester.get('appdata', 'beers/' + beerId, 'kinvey')
  }

  function editBeer (beerId, name, description) {
    let beerData = { name, description, user: sessionStorage.getItem('username') }

    return requester.update('appdata', 'beers/' + beerId, 'kinvey', beerData)
  }

  function createBeer (name, description) {
    let beerData = { name, description }

    return requester.post('appdata', 'beers', 'kinvey', beerData)
  }

  return { loadBeers, loadBeerDetails, editBeer, createBeer }
})()
