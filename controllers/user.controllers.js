const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const { q, name, edad } = req.query;
    res.json({
        nombre: 'Rodrigo',
        msg: 'get API - Controlador',
        q,
        name,
        edad
    });
};

const usuarioPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        nombre: 'Rodrigo',
        msg: 'put API - Controlador',
        id
    });
};

const usuarioPost = (req, res = response) => {
    const { nombre1, edad } = req.body;
    res.json({
        nombre: 'Rodrigo',
        msg: 'post API - Controlador',
        nombre1,
        edad
    });
};

const usuarioDelete = (req, res = response) => {
    res.json({
        nombre: 'Rodrigo',
        msg: 'delete API - Controlador'
    });
};

module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
};