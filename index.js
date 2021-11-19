const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ciao BROTHERONI!') //porcodiaz
  res.send('brother sempre presente')
})

app.get('/prodotto/:codiceprodotto', (req, res) => {

    // andare a cercare il prodotto sul db
    // generazione della pagina html
    var paginaWebProdotto = "<html><body>";
    paginaWebProdotto+="<div>"+req.params.codiceprodotto+"</div>";
    paginaWebProdotto+="</body></html>"


  res.send(paginaWebProdotto);  



})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})