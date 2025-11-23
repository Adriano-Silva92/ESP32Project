const router = require('express').Router()
require('../mongodb/mongocom')

const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req, res)=>{
    res.json({
        success: false,
        message: "ESSE É UM ACESSO RESERVADO!"

    })

})

module.exports = router