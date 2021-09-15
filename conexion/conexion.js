var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ecuarec'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log("la conexion se realizo correctamente")
        }
        else{
            console.log("la conexion fallo")
        }
    }
);
const id=25;
connection.query("DELETE FROM `guardar` WHERE `guardar`.`id_guardar` =?",[id])



module.exports = connection