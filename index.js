const soap = require('soap');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 443;

const address = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';

app.post('/tckn-sorgu', (req, res) => {
    console.log(req.body)

    let params = {
        TCKimlikNo: req.body.tckn,
        Ad: req.body.ad,
        Soyad: req.body.soyad,
        DogumYili: req.body.dogumyili
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