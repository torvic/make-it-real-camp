// package http
const https = require('https')
// query options
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos',
  method: 'GET',
}
// query handling
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  // custom function to show a to do
  const showToDo = (pToDo) => {
    console.log(
      `${pToDo.title} (${pToDo.completed ? 'completed' : 'No completed'})`
    )
    console.log(`- id: ${pToDo.id}`)
    console.log(`- userId: ${pToDo.userId}`)
    console.log('================================================')
  }
  // handle response
  let data = []
  res.on('data', (d) => {
    data.push(d)
  })
  res.on('end', () => {
    const toDos = JSON.parse(Buffer.concat(data).toString())
    toDos.forEach((el) => {
      showToDo(el)
    })
  })
})
// handle error
req.on('error', (error) => {
  console.error(error)
})
// end request
req.end()
