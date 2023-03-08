/*set up route
let responseObject = {}

app.get('/api/timestamp/:input', (request,response) => {
  response.json(responseObject)
})
*/
/*capturing the input
let responseObject = {}

app.get('/api/timestamp/:input', (request,response) => {
  let input = request.params.input
  response.json(input)
})
*/
/*
1-It should handle a valid date, and return the correct unix timestamp
2-It should handle a valid date, and return the correct UTC string
3-It should handle a valid unix date, and return the correct unix timestamp
4-It should return the expected error message for an invalid date
5-It should handle an empty date parameter and return the current time in unix format 
6-It should handle an empty date parameter, and return the current time in UTC format
*/
let responseObject = {}

app.get('/api/:input', (request, response) => {
  let input = request.params.input

  if (/\d{5,}/.test(input)) {
    //3 Timestamp
    input = parseInt(input);

    responseObject['unix'] = new Date(input).getTime();
    responseObject['utc'] = new Date(input).toUTCString();
  } else {
    /*1-Date String*/
    responseObject['unix'] = new Date(input).getTime()
    //2
    responseObject['utc'] = new Date(input).toUTCString()
  }
  //41
  if (!responseObject['unix'] || !responseObject['utc']) {
    response.json({ error: 'Invalid Date' })
  }

  response.json(responseObject)
})
//5
app.get('/api', (request, response) => {
  responseObject['unix'] = new Date().getTime()
  //6
  responseObject['utc'] = new Date().toUTCString()

  response.json(responseObject)
})
