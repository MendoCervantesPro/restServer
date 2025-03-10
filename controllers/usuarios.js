const {response, request} = require ('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre, edad
    });
}

const usuariosPatch =(req, res) => {

    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete =(req, res) => {

    res.json({
        msg: 'delete API - usuariosDelete'
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
    usuariosPut
}