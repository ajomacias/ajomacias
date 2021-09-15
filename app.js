var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bcrypt = require('bcryptjs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recetasRouter = require('./routes/recetas');
var session = require('express-session')
var conection = require('./conexion/conexion');
const router = require('./routes/index');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"Ecuarec",
  resave:false,
  saveUninitialized:false
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recetas', recetasRouter);
app.get('/eliminar/:id',(req,res)=>{
  const id=req.params.id;
  conection.query('DELETE FROM `guardar` WHERE `guardar`.`id_guardar` =?',[id],(err,res)=>{
    if(err){
      console.log("Error")
      
    }else{
      console.log(res);
    }
    
  })
  return  res.redirect('/misRecetas');
});

app.post('/registrar',async (req, res) => {
  const name = req.body.name;
  const apellido = req.body.Apellido;
  const correo = req.body.email;
  const clave = req.body.Contra;
  const tlf = req.body.Telefono;
  const terminos= "True";
  const sesion = "False"
  let claveC= await bcrypt.hash(clave,8)

  conection.query('INSERT INTO usuarios SET ?',{email:correo,nombre:name,apellido:apellido, telefono:tlf,contraseña:claveC,terminos:terminos,sesion:sesion}, async(err,resuts)=>{
   if(err){
      return res.render("registro",{
      alert: true,
      alertTitle:"Registration",
      alertMessage:"!El correo ya existe!",
      alertIcon: "warning",
      ShowConfirmButton: true,
      time :false,
      ruta:"registro"

    });
   }else{
     
       return res.render("login",{
       alert: true,
       alertTitle:"Registration",
       alertMessage:"!Succesfull registration!",
       alertIcon: "success",
       ShowConfirmButton: true,
       time :false,
       ruta:"login"

     });
     
     
   }
  })

})

app.post('/login', async (req, res) => {
  const correo = req.body.email;
  const contraseña = req.body.password;
  let claveC= await bcrypt.hash(contraseña,8)
  if (correo && contraseña) {
		conection.query('SELECT * FROM usuarios WHERE email = ?', [correo], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcrypt.compare(contraseña, results[0].contraseña)) ) {    
				res.render("login",{
          alert:true,
          alertTitle:"Error",
          alertMessage:"email o contraseña incorrecto",
          alertIcon:"error",
          ShowConfirmButton: true,
          timer:false,
          ruta:"login"
        });
				
				//Mensaje simple y poco vistoso
                //res.send('Incorrect Username and/or Password!');				
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION   
          
     req.session.loggedin=true;
     req.session.nombre = results[0].nombre;
     req.session.user = results[0].id_usuario;
     console.log(req.session)
				return   res.redirect('/')    			
		    	
      }
		});
	} else {
    
		return res.render('login',{
      alert:true,
      alertTitle:"ERROR",
      alertMessage:"Porfavor los campos deben ser llenados",
      alertIcon:"error",
      ShowConfirmButton: true,
      timer: false,
      ruta:"login"
    });
		
	}

  
});

app.get('/guardar/:id', (req, res) => {
  conection.query("SELECT*FROM guardar",(err, res) => {
    
  })
  const usuario=req.session.user;
  const {id} = req.params;
  const ag= parseInt(id);
 conection.query('INSERT INTO guardar SET ? ',{id_receta:ag,id_usuario:usuario},(err)=>{
   if(err){
     console.log(err)
   }
   else{
    console.log("siii")
   }
   

 })
 res.render("index",{
  alert:true,
  alertTitle:"CORRECTO",
  alertMessage:"SE A GUARDADO LA RECETA",
  alertIcon:"sucsess",
  ShowConfirmButton: true,
  timer: false,
  ruta:"", name:req.session.nombre
});
});



app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  return res.redirect('/login') 
	})
});

app.post('/buscar',function (req, res,next)  {
  if(req.session.loggedin){
  busqueda=req.body.p
  console.log(busqueda)
  
  conection.query("SELECT * FROM `recetas`",function(err,resultados){
    console.log(resultados)
    return res.render('busqueda', { title: 'Nuestros productos',recetas: resultados, text:busqueda,name:req.session.nombre});});
    console.log(busqueda)
  }
  else{
     return res.render('no')
  }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
