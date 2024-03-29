const tcknSorgu = require('tckn-sorgu');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 443;

app.post('/tckn-sorgu', (req, res) => {

    let params = {
        TCKimlikNo: req.body.tckn,
        Ad: req.body.ad,
        Soyad: req.body.soyad,
        DogumYili: req.body.dogumyili
    };

    tcknSorgu.tcknSorgula(params)
        .then(function (data) {
            var result = {
                result: data,
                success: true
            }
            res.send(result);
        }).catch(function (msg) {
            res.status(500).json({success: false, error: msg});
        });
})

app.listen(process.env.PORT || port, () => console.log(`KPS-API listening on port ${port}!`))
