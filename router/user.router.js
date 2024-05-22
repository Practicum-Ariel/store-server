const
    express = require('express'),
    router = express.Router();

const userService = require('../BL/user.service')

router.post('/', (req, res) => {
    try {
        let user = userService.addNewUser(req.body)
        res.send(user)
    }
    catch (err) {
        res.status(err.code || 400).send(err.message)
    }
})

router.get('/', (req, res) => {
    const users = userService.getAllUsers()
    res.send(users)
})

router.get('/:email', (req, res) => {
    try {
        let user = userService.getSingleUser(req.params.email)
        if (!user) throw { code: 404, message: "user is not exist" }
        res.send(user)
    }
    catch (err) {
        res.status(err.code || 400).send(err.message)
    }
})

router.delete('/:email', (req, res) => {
    users = users.filter(u => u.email != req.params.email)
    res.sendStatus(200)
})

router.put('/:email', (req, res) => {
    console.log(req.body)
    let index = users.findIndex(u => u.email == req.params.email)
    let user = { ...users[index], ...req.body }
    users[index] = user
    res.send(user)
})

module.exports = router;
