// Atividade de Rotas  com  passagens como parametro 
app.get('/rotas/:palavra', (req, res) => {   // passar logica para uma funcao externa 
    let palavra = req.params.palavra 
    let word = palavra.toString().split('').reverse();
    let palavraInvertida = ''
    word.forEach(element => {
        palavraInvertida += element
    })
 
    res.send(`
        <div> 
            <h1> Palavra invertida == ${palavraInvertida}</h1>
        </div>
    `)
})