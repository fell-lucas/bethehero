const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        'evento': 'Omnistack!',
        'aluno': 'Lucas',
    })
})

app.listen(3333)