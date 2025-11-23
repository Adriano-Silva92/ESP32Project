const router = require('express').Router();
const Device = require('../model/devicedata');

// === GET: lista todos os devices ===
router.get('/', async (req, res) => {
    try {
        const listaDevices = await Device.find();
        res.json({
            success: true,
            message: listaDevices
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Erro com o banco de dados!",
            error: err.message
        });
    }
});

// === POST: cadastra novo device ===
router.post('/', async (req, res) => {
    try {
        // Cria o novo device com dados do corpo da requisição
        const novoDevice = new Device({
            nome: req.body.nome,
            kwh: req.body.kwh,
            corrente: req.body.corrente,
            voltagem: req.body.voltagem
        });

        console.log("Novo Device:", novoDevice); // Debug

        // Salva no banco (o slug é gerado automaticamente pelo pre-save)
        const saveNovoDevice = await novoDevice.save();

        res.json({
            success: true,
            message: saveNovoDevice
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Não foi possível cadastrar novo device!",
            error: err.message
        });
    }
});
//Atualizar o dados do dispositivo pelo ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDevice = await Device.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    kwh: req.body.kwh,
                    corrente: req.body.corrente,
                    voltagem: req.body.voltagem
                }
            },
            { new: true } // retorna o documento já atualizado
        );

        if (!updatedDevice) {
            return res.status(404).json({
                success: false,
                message: "Device não encontrado!"
            });
        }

        res.json({
            success: true,
            message: "Device atualizado com sucesso!",
            device: updatedDevice
        });

    } catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Não foi possível atualizar o device!",
            error: err.message
        });
    }
});
//Rota para deletar um Device
router.delete('/:id', async (req, res) => {
    try {
        const deleteDeviceId = await Device.findByIdAndDelete(req.params.id);

        if (!deleteDeviceId) {
            return res.status(404).json({
                success: false,
                message: "Device não encontrado!"
            });
        }


        res.json({
            success: true,
            message: "Device removido com sucesso!",
            device: deleteDeviceId
        });

    } catch (err) {
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Não foi possível remover o device!",
            error: err.message
        });
    }
});


module.exports = router;
