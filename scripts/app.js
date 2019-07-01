/* global $ Sammy pageService beersService */

$(() => {
  const app = Sammy('.wrapper', function () {
    this.use('Handlebars', 'hbs')

    this.get('/index.html', pageService.getHomePage)
    this.get('/', pageService.getHomePage)

    this.get('#/login', pageService.getLoginPage)
    this.post('#/login', pageService.postLoginPage)

    this.get('#/logout', pageService.logout)

    this.get('#/allBeersGrid', pageService.getAllBeersGrid)
    this.get('#/allBeersList', pageService.getAllBeersList)
  })

  app.run()
})
