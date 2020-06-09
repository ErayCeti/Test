const express = require('express');
const router = express.Router();
//const mysql = require('mysql');

// const con = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"Notcu"
// })
//
// con.connect(err =>{
//   if(err) console.log(err);
// })
//
// router.get('/home',(req, res, next)=>{
//   const sorgu = "SELECT * FROM notlar ORDER BY RAND() LIMIT 4"
//   con.query(sorgu, (err,result)=>{
//     if(err){
//       return res.send(err)
//     }
//     else{
//       return res.json({
//         data:result
//       })
//     }
//   })
// })
router.get('/home', (req, res, next) => {
    res.status(200).json({
        Name:'Eray',
        SurName:'Sofi:D'
    })
});
module.exports = router;
