import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log('Listagem de usuarios')

    res.json([
        "eu",
        "sou",
        "uma",
        "pica"
    ])
}) //A função vai ser chamada quando o usuário entrar em .../users

app.listen(3333)