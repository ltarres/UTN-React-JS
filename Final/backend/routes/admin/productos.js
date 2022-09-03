var express = require('express');
var router = express.Router();
var productsModel = require('../../models/productsModel');
var usuariosModel = require('../../models/usuariosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {

    var productos = await productsModel.getProducts();

    productos = productos.map(producto => {
        if (producto.imagen) {
            const imagen = cloudinary.image(producto.imagen, {
                width: 50,
                height: 50,
                crop: 'fill'
            });
            return {
                ...producto,
                imagen
            }
        } else {
            return {
                ...producto,
                imagen: ''
            }
        }
    });


    const imgUsuario = await usuariosModel.getUsuarioById(req.session.id_usuario);
    console.log(imgUsuario);
    
      
                // console.log( cloudinary.image(imgUsuario.IMAGEn, {
                //     width: 50,
                //     height: 50,
                //     crop: 'fill'
                // }));
        

    res.render('admin/productos', {
        // layout: 'admin/layout',
        layout: 'admin/inicio',
        persona: req.session.nombre,
        imagen : cloudinary.image(imgUsuario.IMAGEN, {
            width: 50,
            height: 50,
            crop: 'fill'
        }),
        productos
        
    });
});



router.get('/agregarProducto', (req, res, next) => {
    
    res.render('admin/agregarProducto', {
        
        layout: 'admin/inicio',
        persona:req.session.nombre
      
    })
});


router.get('/productos', (req, res, next) => {
    res.render('admin/productos', {
        layout: 'admin/layout',
        persona:req.session.nombre,
    })
});


router.post('/agregarProducto', async (req, res, next) => {
   
    console.log(req.body);
   
    try {

        var imagen= '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
        }



        if (req.body.title != "" && req.body.category!= "" && req.body.description != "" && req.body.price != "") {
            // await producsModel.insertProducts({
            //     ...req.body,
            //     image
            // });
            await productsModel.insertProducts({
                ...req.body,
                imagen
               
            });
           
        res.redirect('/admin/productos')
        } else {
            res.render('admin/agregarProducto', {
                layout: 'admin/inicio',
                error: true,
                message: 'Todos los campos son requeridos',
                persona:req.session.nombre,
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregarProducto', {
            layout: 'admin/inicio',
            error: true,
            message: 'No se cargo el producto',
            persona:req.session.nombre
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let producto = await productsModel.getProductsById(id);
    if (producto.imagen) {
        await (destroy(producto.imagen));
    }

    await productsModel.deleteProductsById(id);
    res.redirect('/admin/productos');
});


router.get('/modificarProducto/:id', async (req, res, next) => {
    var id = req.params.id;
    var producto = await productsModel.getProductsById(id);


    res.render('admin/modificarProducto', {
        layout: 'admin/inicio',
        persona:req.session.nombre,
        producto
    })

});

router.post('/modificarProducto', async (req, res, next) => {
    try {


        let imagen = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            imagen = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                imagen = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }


        var obj = {

            title: req.body.title,
            price: req.body.price,
            description:req.body.description,
            category:req.body.category,
            rating:req.body.rating,
            cantidad:req.cantidad,
            articulo: req.body.articulo,
            imagen
          

        }
        console.log(obj)

        
        await productsModel.modificarProductsById(obj,req.body.id);
        res.redirect('/admin/productos');

    } catch (error) {
        console.log(error)
        res.render('admin/modificarProducto', {
            layout: 'admin/inicio',
            error: true,
            message: 'No se modifico el Producto'
        })
    }
})




module.exports = router;