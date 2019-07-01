/* global $ btoa sessionStorage */

let requester = (() => {
  const kinveyBaseUrl = 'https://baas.kinvey.com/'
  const kinveyAppKey = 'kid_HkLesjQxH'
  const kinveyAppSecret = 'c7f3bd9091b84e379dfa5fbb208ef311'

  // Creates the authentication header
  function makeAuth (type) {
    return type === 'basic'
      ? 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
      : 'Kinvey ' + sessionStorage.getItem('authtoken')
  }

  // Creates request object
  function makeRequest (method, module, endpoint, auth) {
    return {
      method,
      url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
      headers: {
        'Authorization': makeAuth(auth)
      }
    }
  }

  // Function to return GET promise
  function get (module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth))
  }

  // Function to return POST promise
  function post (module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth)
    req.data = data
    return $.ajax(req)
  }

  // Function to return PUT promise
  function update (module, endpoint, auth, data) {
    let req = makeRequest('PUT', module, endpoint, auth)
    req.data = data
    return $.ajax(req)
  }

  // Function to return DELETE promise
  function remove (module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth))
  }

  return { get, post, update, remove }
})()
