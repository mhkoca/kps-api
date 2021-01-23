const soap = require('soap');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 1923;

const address = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';

app.get('/tckn-sorgu', (req, res) => {
    console.log(req.query)

    let params = {
        TCKimlikNo: req.query.tckn,
        Ad: req.query.ad,
        Soyad: req.query.soyad,
        DogumYili: req.query.dogumyili
    };

    soap.createClient(address, (err, client) => {

        client.TCKimlikNoDogrula(params, (err, result) => {
            if (result.TCKimlikNoDogrulaResult) {
                console.log(result.TCKimlikNoDogrulaResult);
                res.send(result.TCKimlikNoDogrulaResult)
            } else {
                console.log("error: " + err);
                res.send(false)
            }
        });

    });

})

app.listen(process.env.PORT || port, () => console.log(`KPS-API listening on port ${port}!`))