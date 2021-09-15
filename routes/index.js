const { name } = require('ejs');
var express = require('express');
var router = express.Router();
const expresssession = require("express-session")
var app = require("../app")
var connection = require("../conexion/conexion")

/* GET home page. */
router.get('/', function(req, res, next) {
	
  if (req.session.loggedin==true) {
    
		res.render('index',{
			login: true,
			name: req.session.nombre,
			user: req.session.user,	
			id: req.session.user		
		});		
	} else {
		return res.render('no');
   
		
	}
  
});
/* GET registro page. */
router.get('/registro', function(req, res, next) {
  return res.render('registro', { title: 'EcuaRec' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  return res.render('login', { title: 'EcuaRec' });
});

/* GET mariscos page. */
router.get('/mariscos', function(req, res, next) {
	console.log(req.session)
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('mariscos',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,			
		});		
	} else {
		return res.render('no');
   
    			
	}
});

/* GET mariscos2 page. */
router.get('/mariscos2', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session.loggedin)
		res.render('mariscos2',{
			login: true,
			name: req.session.name			
		});
	   console.log(sessionStorage)		
	} else {
		return res.render('no');
   		
	}
});

/* GET Quienes_somos page. */
router.get('/quienes_somos', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session.loggedin)
		res.render('Quienes_somos',{
			login: true,
			name: req.session.nombre,	
			id: req.session.user				
		});		
	} else {
		return res.render('no');
   
    			
	}
});

/* GET Recetas_de_dulce. */
router.get('/recetas_de_dulce', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session.loggedin)
		res.render('recetas_de_dulce',{
			login: true,
			name: req.session.nombre,
			id: req.session.user			
		});		
	} else {
		return res.render('no');
      			
	}
});


/* GET Recetas_de_sal. */
router.get('/recetas_de_sal', function(req, res, next) {
  if (req.session.loggedin== true) {
		res.render('recetas_de_sal',{
			login: true,
			name: req.session.nombre,
			id: req.session.user	

		});	
		
		
	} else {
		return res.render('no');
   		
	}
	
});

/* GET misRecetas. */
router.get('/misRecetas', function(req, res, next) {
	
	if (req.session.loggedin==true) {
		connection.query("SELECT R.img_receta, G.id_guardar, U.id_usuario,U.nombre,U.apellido,R.link_receta,R.porciones_receta, R.nom_receta, R.porciones_receta, R.categoria, R.total_receta,R.link_receta FROM recetas R, usuarios U, guardar G WHERE U.id_usuario=G.id_usuario and R.id_receta=G.id_receta",function(err,ressult){
			console.log(ressult);
			if(err){
				console.log(err)
			}
			res.render('misRecetas',{
				login: true,
			    name: req.session.nombre,
			    id: req.session.user,	
				table:ressult
			});		
		})} else {
			return res.render('no');
	   
					
		}
  
});



/* GET Recetas_de_sal. */
//router.get('/buscar', function(req, res, next) {
//  return res.render('busqueda', { title: 'EcuaRec' });
//});





module.exports = router;
