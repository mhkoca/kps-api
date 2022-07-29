# kps-api
TCKN sorgulama soap servisini kullanmak için bir API.

Özellikle C# gibi SOAP entegrasyonlarının zahmetli olduğu dillerde KPS SOAP servisleriyle uğraşmamak için kullanılabilecek bir API yazdım.

SOAP çağrısını yapmak için yazdığım bir NPM kütüphanesini([tckn-sorgu](https://www.npmjs.com/package/tckn-sorgu)) kullandım. 

# Kullanım

Aşağıdaki gibi bir JSON parametre bekliyorum:

```js 
{
    "tckn":"12345678901",
    "ad": "Muhammed Hilmi",
    "soyad": "Koca",
    "dogumyili": "1989"
}
```

Aşağıdaki gibi bir cevap dönüyorum: 

```js
{
    "result": true
}
```

Aşağıdaki endpoint üzerinden test edebilirsiniz:

https://kps-public-api.herokuapp.com/tckn-sorgu