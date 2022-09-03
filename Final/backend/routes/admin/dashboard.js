var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {

    var imgUsuario = await usuariosModel.getUsuarioById(req.session.id_usuario);
console.log(imgUsuario);

  
            console.log( cloudinary.image(imgUsuario.IMAGEN, {
                width: 50,
                height: 50,
                crop: 'fill'
            }));
    
    res.render('admin/dashboard', {
        // layout: 'admin/layout',
        layout: 'admin/inicio',
        persona: req.session.nombre,
        imagen : cloudinary.image(imgUsuario.IMAGEN, {
            width: 50,
            height: 50,
            crop: 'fill'
        })
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});


router.get('/novedades', (req, res, next) => {
    res.render('admin/novedades', {
        layout: 'admin/layout'
    })
});



router.post('/agregar', async (req, res, next) => {
    try {

        var imagen = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.fecha != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                imagen
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
            message: 'No se cargo el novedad'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.imagen) {
        await (destroy(novedad.imagen));
    }

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});


router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadById(id);


    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })

});

router.post('/modificar', async (req, res, next) => {
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

            titulo: req.body.titulo,
            fecha: req.body.fecha,
            imagen,
            cuerpo: req.body.cuerpo

        }
        console.log(obj)

        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el novedad'
        })
    }
})


module.exports = router;