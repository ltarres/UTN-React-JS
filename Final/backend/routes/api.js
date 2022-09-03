var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var productsModel = require('./../models/productsModel');
var userAPIModel = require('./../models/userAPIModel');
const cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {

    let novedades = await novedadesModel.getNovedades();


    novedades = novedades.map(novedades => {
        if (novedades.imagen) {
            const imagen = cloudinary.url(novedades.imagen, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router.get('/novedades/:id', async function  (req, res, next)  {
    var id = Number(req.params.id);
   let novedades = await novedadesModel.getNovedadById(id);
   
   if (novedades) {
    res.json(novedades);
   }else{
    res.status(404).end()
   }
       

});

//Products
router.get('/products', async function (req, res, next) {

    let products = await productsModel.getProducts();


    products = products.map(products => {
        if (products.imagen) {
            const imagen = cloudinary.url(products.imagen, {
                width: 400,
                height: 400,
                crop: 'fill'
            });
            return {
                ...products,
                imagen
            }
        } else {
            return {
                ...products,
                imagen: ''
            }
        }
    });
    res.json(products);
});

router.get('/products/:id', async function  (req, res, next)  {
    var id = Number(req.params.id);
   let products = await productsModel.getProductsById(id);
   
   products.imagen = cloudinary.url(products.imagen, {
            width: 400,
            height: 400,
            crop: 'fill'
        });
 



   if (products) {
    res.json(products);
   }else{
    res.status(404).end()
   }
       

});


router.post('/contacto' , async (req, res) => {
    const mail = {
        to:'lucastarres@gmail.com',
        subject:'Contacto web',
        html:`${req.body.nombre} se contacto a traves de la web
        y quiere mas informacion a este correo: ${req.body.email}<br> Ademas,
        hizo el siguiente comentario: ${req.body.mensaje}<br>Su telefono es:
        ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        message:'Mensaje Enviado'
    })
})



router.post('/login' , async (req, res) => {
   
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        console.log(req.body.usuario);
        console.log(req.body.password);
        var data = await userAPIModel.getUserByUserAPInameAndPassword(usuario, password);
    
        if (data != undefined) {
     console.log (data.usuario);
          res.status(201).json({
            error:false,
            message:data.usuario
        })

        } else {
            res.status(201).json({
           error: true,
           message:'Usuario o Contraña Incorrecta' 
        })
    
        }
    
      } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
      }

})


module.exports = router;