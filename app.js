const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/Metas')
const Meta = mongoose.model('Meta')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER , Content-Type, Authorization")
    app.use(cors())
    //precisa colocar o next! senão pára aqui
    next()
})

mongoose.connect('mongodb://localhost:27017/isabella', {
    useNewUrlParser: true,
    userUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB foi realizada com sucesso!")
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não foi realizada com sucesso: " + err)
})

//Listar as metas já cadastradas
app.get('/metas', async (req, res) => {
    await Meta.find({}).then((metas) => {
        return res.json({
            error: false,
            metas
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado."
        })
    })
    
})

//Cadastro de metas
app.post('/metas', async (req,res) => {
    await Meta.create(req.body, (err) => {
        if(err) return res.status(400).json({
            err: true,
            message: "Erro: meta não cadastrada com sucesso! Tente Novamente."
        })
    })

    return res.json({
        error: false,
        message: "Meta cadastrada com sucesso!"
    })
})

app.listen(8080, () => {
    console.log("Conectado à porta 8080")
})
