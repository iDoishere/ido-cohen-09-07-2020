var express = require('express');
var router = express.Router();

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'q10101191',
  database: 'database1'
});

connection.connect(err => {
  if (err) {
    return err;
  }
});


 
/* GET users listing. */
router.get('/', async function (req, res, next) {
 
  connection.query('SELECT * FROM table1', (err, results) => {
    if (err) {
      console.log(err)
    } else {
      return res.json({
        results
      })
    }
  })
});

router.put('/', async function (req, res, next) {
  let { name, email, phone, date, id } = req.body;
   
  let sql = `UPDATE table1 SET name='${name}', email='${email}', phone='${phone}', date='${date}'
 WHERE id='${id}'`
  connection.query(sql, function (err, result) {
    if (err) {
      res.send({ auth: false })
    } else {
      res.send({ auth: true })
    }
  });

})

router.post('/', async function (req, res, next) {
  let {  name, email, phone, date } = req.body;
  let sql = `INSERT INTO table1(name,email,phone,date )
  VALUES('${name}','${email}','${phone}','${date}')`;

  connection.query(sql, function (err, result) {
    if (err) {
      res.send({ auth: false })
    } else {
      res.send({ auth: true })
    }
  });

});

router.delete('/', async function (req, res, next) {
 let id = req.body.id;

  let sql = `DELETE FROM table1 WHERE id='${id}';`;
  connection.query(sql, function (err, result) {
    if (err) {
      res.send({ auth: false })
    } else {
      res.send({ auth: true })
    }
  });
})

module.exports = router;
