/*modulos do express*/
const express = require('express')

/*modulos do app*/
const routes = require('./routes/routes')


const app = express()

app.use(express.json())
app.use(routes)

app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Servidor Executando na Porta 5000'))