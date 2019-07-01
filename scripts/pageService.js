/* global auth sessionStorage */

let pageService = (() => {
  function getHomePage () {
    this.loggedIn = sessionStorage.getItem('authtoken')
    this.username = sessionStorage.getItem('username')

    this.loadPartials({
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs'
    })
      .then(function () {
        this.partial('../templates/home/home.hbs')
      })
  }

  function getLoginPage () {
    this.loadPartials({
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs',
      loginForm: '../templates/login/login-form.hbs'
    })
      .then(function () {
        this.partial('../templates/login/login-page.hbs')
      })
  }

  function postLoginPage (ctx) {
    let username = ctx.params.username
    let password = ctx.params.password

    auth.login(username, password)
      .then(function (data) {
        auth.saveSession(data)
        ctx.redirect('/')
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  function logout () {
    auth.logout()
    sessionStorage.clear()
    this.redirect('/')
  }

  function getAllBeersGrid (ctx) {
    this.beers = [
      {
        "beerId": 1,
        "name": "Stella Artois ",
        "brewery": {
          "id": 1,
          "name": "Anheuser-Busch InBev Belgium "
        },
        "country": {
          "id": 1,
          "code": "AF",
          "name": "Afghanistan"
        },
        "abv": 2,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 1,
          "name": "Apple Cider - Hopped"
        },
        "description": "Stella Artois is one of the world’s best-selling beers and is enjoyed in more than 80 countries. Its full, characteristic flavour and high quality is assured through a superior brewing process and by using the finest ingredients available.",
        "beerPicture": "pic1"
      },
      {
        "beerId": 2,
        "name": "Tuborg Classic",
        "brewery": {
          "id": 2,
          "name": "Heineken Nederland"
        },
        "country": {
          "id": 2,
          "code": "AL",
          "name": "Albania"
        },
        "abv": 3,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 2,
          "name": "Belgian Ale - Strong Dark"
        },
        "description": null,
        "beerPicture": "pic2"
      },
      {
        "beerId": 3,
        "name": "Heineken Dark Lager3",
        "brewery": {
          "id": 3,
          "name": "Carlsberg Brewery"
        },
        "country": {
          "id": 34,
          "code": "BF",
          "name": "Burkina Faso"
        },
        "abv": 4,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 3,
          "name": "Bock - Eisbock"
        },
        "description": "A Vienna style amber lager with a light copper color and nice malt sweetness. Rich, creamy, and medium to full bodied, this lager uses seven different malts and three varieties of imported and domestic hops.",
        "beerPicture": "pic3"
      },
      {
        "beerId": 5,
        "name": "Kamenitza Fresh",
        "brewery": {
          "id": 4,
          "name": "Haskovo (Molson Coors)"
        },
        "country": {
          "id": 4,
          "code": "DS",
          "name": "American Samoa"
        },
        "abv": 1,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 4,
          "name": "California Common - Steam Beer"
        },
        "description": null,
        "beerPicture": "pic4"
      },
      {
        "beerId": 6,
        "name": "Burgasko Svetlo",
        "brewery": {
          "id": 1,
          "name": "Anheuser-Busch InBev Belgium "
        },
        "country": {
          "id": 1,
          "code": "AF",
          "name": "Afghanistan"
        },
        "abv": 2,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 1,
          "name": "Apple Cider - Hopped"
        },
        "description": null,
        "beerPicture": "pic5"
      }
    ]

    this.loadPartials({
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs',
      beerCard: '../templates/beers/beer-card.hbs'
    })
      .then(function () {
        this.partial('../templates/beers/all-beers-grid.hbs')
      })
  }

  function getAllBeersList (ctx) {
    this.beers = [
      {
        "beerId": 1,
        "name": "Stella Artois ",
        "brewery": {
          "id": 1,
          "name": "Anheuser-Busch InBev Belgium "
        },
        "country": {
          "id": 1,
          "code": "AF",
          "name": "Afghanistan"
        },
        "abv": 2,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 1,
          "name": "Apple Cider - Hopped"
        },
        "description": "Stella Artois is one of the world’s best-selling beers and is enjoyed in more than 80 countries. Its full, characteristic flavour and high quality is assured through a superior brewing process and by using the finest ingredients available.",
        "beerPicture": "pic1"
      },
      {
        "beerId": 2,
        "name": "Tuborg Classic",
        "brewery": {
          "id": 2,
          "name": "Heineken Nederland"
        },
        "country": {
          "id": 2,
          "code": "AL",
          "name": "Albania"
        },
        "abv": 3,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 2,
          "name": "Belgian Ale - Strong Dark"
        },
        "description": null,
        "beerPicture": "pic2"
      },
      {
        "beerId": 3,
        "name": "Heineken Dark Lager3",
        "brewery": {
          "id": 3,
          "name": "Carlsberg Brewery"
        },
        "country": {
          "id": 34,
          "code": "BF",
          "name": "Burkina Faso"
        },
        "abv": 4,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 3,
          "name": "Bock - Eisbock"
        },
        "description": "A Vienna style amber lager with a light copper color and nice malt sweetness. Rich, creamy, and medium to full bodied, this lager uses seven different malts and three varieties of imported and domestic hops.",
        "beerPicture": "pic3"
      },
      {
        "beerId": 5,
        "name": "Kamenitza Fresh",
        "brewery": {
          "id": 4,
          "name": "Haskovo (Molson Coors)"
        },
        "country": {
          "id": 4,
          "code": "DS",
          "name": "American Samoa"
        },
        "abv": 1,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 4,
          "name": "California Common - Steam Beer"
        },
        "description": null,
        "beerPicture": "pic4"
      },
      {
        "beerId": 6,
        "name": "Burgasko Svetlo",
        "brewery": {
          "id": 1,
          "name": "Anheuser-Busch InBev Belgium "
        },
        "country": {
          "id": 1,
          "code": "AF",
          "name": "Afghanistan"
        },
        "abv": 2,
        "avgRating": 0,
        "votes": 0,
        "style": {
          "id": 1,
          "name": "Apple Cider - Hopped"
        },
        "description": null,
        "beerPicture": "pic5"
      }
    ]

    this.loadPartials({
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs',
      beerRow: '../templates/beers/beer-row.hbs'
    })
      .then(function () {
        this.partial('../templates/beers/all-beers-list.hbs')
      })
  }

  return {
    getHomePage,
    getLoginPage,
    postLoginPage,
    getAllBeersGrid,
    getAllBeersList,
    logout
  }
})()

function loading () {
  $('div.loading').addClass('d-block text-white')
}
