var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
const util = require('util');
const cloudinary = require('cloudinary') .v2;
const uploader = util.promisify(cloudinary.uploader.upload);


/* GET home page. */
router.get('/', async function(req, res, next) {

  var productos = await productosModel.getProductos();

  res.render('admin/novedades',{
    layout:'admin/layout',
     persona: req.session.nombre,
     productos
  } );
});

router.get('/agregar', (req, res, next) => {
   res.render('admin/agregar',{
     layout: 'admin/layout'
   })
});

router.post('/agregar', async (req, res, next) => {
   try {
        //para las images 
        var img_id='';
        console.log (req.files.imagen);

        if (req.files && Object.keys(reg.files).length>0){
          imagen = reg.files.imagen;
          img_id= (await uploader(imagen.tempFilePath)).public_id;
        }


        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
       //   await productosModel.insertProducto(req.body);
          await productosModel.insertProducto({
            ...req.body,
            img_id // se agrego para las imagenes sead> titu,subt,cuerpo
           });
          res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                 layout: 'admin/layout',
                 error: true,
                 message: 'Todos los campos son requeridos'
            })
        }
   } catch (error) {
     console.log(error)
     res.render('admin/agregar', {
         layout: 'admin/layout',
         error: true,
         message: 'No se cargo el producto'
     })
   }
})

router.get('/eliminar/:id', async (req, res, next) => {
   var id = req.params.id;
   await productosModel.deleteProductosById(id);
   res.redirect('/admin/novedades');
});


router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var producto = await productosModel.getProductoById(id);

  
  res.render('admin/editar', {
    layout: 'admin/layout',
    producto
  })

});

router.post('/editar', async (req, res, next) => {
  try {

    var obj = {
                imagen: req.body.imagen,
                producto: req.body.producto,
                precio: req.body.precio,
                descuento: req.body.descuento
    }
         console.log(obj)

         await productosModel.editarProductoById(obj, req.body.id);
         res.redirect('/admin/novedades');

  } catch (error) {
      console.log(error)
      res.render('admin/editar', {
          layout: 'admin/layout',
          error: true,
          message: 'No se modifico el producto'
      })
  }
})


module.exports = router;