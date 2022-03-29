const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'devuser',
    password: 'Vanrlan',
    database: 'genshin_ecommerce'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

// app.get("/api/insert", (req, res) => {

//     const productName = req.body.productName;
//     const productDesc = req.body.productDesc;
//     const productPrice = req.body.productPrice;

//     const sqlInsert = "INSERT INTO products (product_name, product_desc, product_price) VALUES (?,?)"
//     db.query(sqlInsert, [productName, productDesc, productPrice], (err, result) => {
//         console.log(result);
//     })
// });

app.listen(3001, () => {
    console.log('running on port 3001');
});