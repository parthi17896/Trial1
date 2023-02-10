import http from 'k6/http'

export default function () {
  let response

  group('https://fakerestapi.azurewebsites.net/api/v1/Books', function () {
    // https://fakerestapi.azurewebsites.net/api/v1/Books
    response = http.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)

    // https://fakerestapi.azurewebsites.net/api/v1/Books - clone
    response = http.get('https://fakerestapi.azurewebsites.net/api/v1/Books/1', {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)

    // https://fakerestapi.azurewebsites.net/api/v1/Books - clone - clone
    response = http.post(
      'https://fakerestapi.azurewebsites.net/api/v1/Books',
      '{\r\n  "id": 0,\r\n  "userName": "string",\r\n  "password": "string"\r\n}',
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response)

    // https://fakerestapi.azurewebsites.net/api/v1/Books - clone - clone - clone
    response = http.put(
      'https://fakerestapi.azurewebsites.net/api/v1/Books/0',
      '{\r\n  "id": 0,\r\n  "userName": "string0",\r\n  "password": "string0"\r\n}',
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response)

    // https://fakerestapi.azurewebsites.net/api/v1/Books - clone - clone - clone - clone
    response = http.del('https://fakerestapi.azurewebsites.net/api/v1/Books/0', null, {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    })
  })

  // Automatically added sleep
  console.log(response)
}