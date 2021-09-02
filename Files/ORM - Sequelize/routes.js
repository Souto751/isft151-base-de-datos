const router = require('express').Router();
const {User} = require('./db');

// Métodos create, findAll, destroy y update, son parte de Sequelize.

// Rutas
router.get('/', (req, res) => {
    res.send(`Base de datos / ORM`);
});

router.post('/user', async(req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

router.get('/user', async(req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.delete('/user/:id', async(req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json('User deleted successfully!');
});

router.patch('/user/:id', async(req, res) => {
    await User.update({name: req.body.name, lastname: req.body.lastname}, {
        where: {
            id: req.params.id
        }
    })
    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
});

module.exports = router;