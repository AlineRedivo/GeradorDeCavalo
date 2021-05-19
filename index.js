const express = require('express')
const axios = require('axios').default
const parse = require('node-html-parser').parse
const app = express()
const PORT = process.env.PORT || 7070


app.get('/cavalo', function (req, res) {

   
    var cavalos = []
    var url = "http://www.guiaderacas.com.br/cavalos/racas/"
    var requisao = axios.get(url)
    requisao.then(function (resposta) {
        var root = parse(resposta.data)
        var arrayCavalos =  root.querySelectorAll(".menulink")

        cavalos = arrayCavalos.map(function(cavalo){
            return {

               "Raça cavalo": cavalo["rawText"].substring(1),
               "link": cavalo["_attrs"].href,
               "timestamp": Date.now()

            }
            
        })
        
        res.json(cavalos)
    })

    
})

app.get('/busca', function (req, res) {

    const query = req.query.consulta
    var url = "http://www.guiaderacas.com.br/cavalos/racas/"
    var requisao = axios.get(url)
   

    requisao.then(function (resposta) {
        var root = parse(resposta.data)
        var arrayCavalos =  root.querySelectorAll(".menulink")
        

        for (var i = 0; i < arrayCavalos.length; i++) {
            
            const busca = root.querySelectorAll(".menulink")[i]["rawText"]
            const aux = busca.substr(1).trim()
             
            
            if(query == aux){

               res.json(aux)
            }
                         
        }
        
    })

})


app.listen(PORT, function () {

    console.log("Servidor inicializado com sucesso")
})