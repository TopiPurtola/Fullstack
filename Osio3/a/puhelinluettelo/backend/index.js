const { response } = require('express')
const { request } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

morgan.token('postdata', function(req, res) {
  if (req.method === 'POST') {
    return JSON.stringify(req.body);
  }
  return '-';
});

app.use(morgan(':method :url :status :response-time ms - :postdata'));

app.use(express.json());



const kovacode = 
  [
    {
      "name": "Lauri Penttinen",
      "number": "345678987654",
      "id": 1
    },
    {
      "name": "Pentti Laurinen",
      "number": "09876546789",
      "id": 2
    },
    {
      "name": "Jorma",
      "number": "456789",
      "id": 3
    }
  ]

  app.get('/', (request, response) => {
  response.send("pekka")    
})

app.post('/api/persons', (request, response) => {
  const { name, number } = request.body;

  if (!name || !number) {
    return response.status(400).json({ error: "Name or number not found" });
  }

  if (kovacode.some(entry => entry.name === name)) {
    return response.status(409).json({ error: "Name must be unique" });
  }

  const id = Math.floor(Math.random() * 100000);
  const currentDate = new Date(); // Get the current date

  kovacode.push({ name, number, id });
  console.log(kovacode); // Print the updated phonebook to the console

  return response.status(201).json({
    message: "Entry added successfully",
    id,
    date: currentDate.toISOString() // Convert current date to ISO string
  });
});


app.get ('/info', (request,response) => {
  response.send(
    "Phonebook has the info of "+kovacode.length+" people<br>"+
currentdate)
})

app.get('/api/persons', (request, response) => {
   response.send(kovacode)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  console.log(id)
  const lista = kovacode.find(lista => lista.id == id)

  if (lista) {
    response.send(lista)
  }
  else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id); 
  const index = kovacode.findIndex(person => person.id === id);

  if (index != -1) {
    kovacode.splice(index, 1); 
    response.status(204).end(); 
  } else {
    response.status(404).end(); 
  }
});



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})