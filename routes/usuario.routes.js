const express = require ('express');
const router = express.Router();
const usuarioCtrl = require ('../controllers/usuario.controller');

router.get('/', usuarioCtrl.getUsers);
router.post('/', usuarioCtrl.createUser);
router.get('/', usuarioCtrl.getUniqueUser);
router.put('/', usuarioCtrl.editUser);
router.put('/', usuarioCtrl.deleteUser);
/*router.post('/', usuarioCtrl.authenticateUser);*/

module.exports =router;
