const ModelUser = require('../models/model');
//const bcrypt = require('bcrypt'); // Asegúrate de tener bcrypt instalado

const usuarioCtrl = {};

// Create
usuarioCtrl.createUser = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
}

// Consultar
usuarioCtrl.getUsers = async (req, res) => {
    const respuesta = await ModelUser.find({});
    res.send(respuesta);
}

// Consultar por Id
usuarioCtrl.getUniqueUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({ _id: id });
    res.send(respuesta);
}

// Actualizar
usuarioCtrl.editUser = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({ _id: id }, body);
    res.send(respuesta);
}

// Eliminar
usuarioCtrl.deleteUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.send({ message: "usuario eliminado con exito" });
}

/*Autenticación
usuarioCtrl.authenticateUser = async (req, res) => {
    const { nomuser, password } = req.body;
    // Verificar si se proporcionaron ambos campos
    if (!nomuser || !password) {
        return res.status(400).send({ message: "por favor, complete todos los campos" });
    }
    try {
        const user = await ModelUser.findOne({ nomuser: nomuser });
        if (user) {
            const match = await bcrypt.compare(password, user.password); // Asegúrate de que las contraseñas estén encriptadas
            if (match) {
                res.send({ message: 'Autenticación Exitosa' });
            } else {
                res.status(401).send({ message: "credenciales invalidas" });
            }
        } else {
            res.status(401).send({ message: "credenciales invalidas" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}*/

module.exports = usuarioCtrl;

