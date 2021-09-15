var express = require('express');
var router = express.Router();
var sessio = require("express-session")

/* GET recetas. */
router.get('/', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('index',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   
    			
	}
});

//Mariscos

/* GET cangrejada. */
router.get('/mariscos/cangrejada', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/cangrejada',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   
    			
	}
});

/* GET arroz_marinero. */
router.get('/mariscos/arroz_marinero', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/arroz_marinero',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});

/* GET ceviche. */
router.get('/mariscos/ceviche', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/ceviche',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});

/* GET arroz_chaulafan_camaron. */
router.get('/mariscos/chaulafan_con_camarones', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/chaulafan-camaron',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
 
});


/* GET salteado_camaron. */
router.get('/mariscos/salteado_de_camaron', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/salteado_camaron',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
 
});
/* GET encebollado. */
router.get('/mariscos/encebollado', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/encebollado',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});

/* GET camarones_al_ajillo. */
router.get('/mariscos/camarones_al_ajillo', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/camarones_al_ajillo',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
 
});

/* GET cocada de camaron. */
router.get('/mariscos/encocado_camaron', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/Mariscos/encocado_camaron',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});


//Recetas dulces


/* GET bizcocho. */
router.get('/recetas_de_dulce/bizcocho', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/recetas_de_dulce/bizcocho',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});

/* GET cocada. */
router.get('/recetas_de_dulce/cocada', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/recetas_de_dulce/cocada',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
  
});

/* GET manjar_de_leche. */
router.get('/recetas_de_dulce/manjar_de_leche', function(req, res, next) {
  if (req.session.loggedin== true) {
    console.log(req.session)
		res.render('Recetas/recetas_de_dulce/manjar_de_leche',{
			login: true,
			name: req.session.nombre,
			id: req.session.user,	
      title: 'EcuaRec',		
		});		
	} else {
		return res.render('no');
   		
	}
 
});

/* GET tarta. */
router.get('/recetas_de_dulce/tarta', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			return res.render('Recetas/recetas_de_dulce/tarta',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET tres leches. */
router.get('/recetas_de_dulce/tres_leches', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			return res.render('Recetas/recetas_de_dulce/tres_leches',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET tres arroz leche. */
router.get('/recetas_de_dulce/arroz_leche', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			return res.render('Recetas/recetas_de_dulce/arroz-leche',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET gelatina tricolor. */
router.get('/recetas_de_dulce/gelatina_tricolor', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			return res.render('Recetas/recetas_de_dulce/gelatina_tricolor',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');   
		}
});

//Recetas de sal

/* GET papas_con_cuero. */
router.get('/recetas_de_sal/papas_cuero', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/papas_cuero',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
 
});

/* GET seco_de_chivos. */
router.get('/recetas_de_sal/seco_de_chivo', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/seco_de_chivo',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
  
});


/* GET caldo de bolas de verde. */
router.get('/recetas_de_sal/caldo_de_bolas_de_verde', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/caldo_de_bolas_de_verde',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET bolones. */
router.get('/recetas_de_sal/bolones', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/bolones',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET mote pata. */
router.get('/recetas_de_sal/mote_pata', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/mote-pata',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');
			   
		}
});

/* GET tigrillo ecuatoriano. */
router.get('/recetas_de_sal/tigrillo_ecuatoriano', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/tigrillo-ecuatoriano',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');   
		}
});

/* GET bolon de verde. */
router.get('/recetas_de_sal/bolo_de_verde', function(req, res, next) {
	if (req.session.loggedin== true) {
		console.log(req.session)
			res.render('Recetas/recetas_de_sal/bolones',{
				login: true,
				name: req.session.nombre,
				id: req.session.user,	
		        title: 'EcuaRec',		
			});		
		} else {
			return res.render('no');   
		}
});
    


module.exports = router;