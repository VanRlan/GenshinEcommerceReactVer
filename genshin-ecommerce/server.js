const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: 'Vanrlan',
    database: 'genshin_ecommerce'
});

db.connect(err => {
    if(err) {
        return err
    } else {
        console.log("db connection succesful.");
    }
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
});