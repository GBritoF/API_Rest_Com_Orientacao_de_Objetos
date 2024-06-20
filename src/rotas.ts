import { Router } from "express"

const rotas = Router()

rotas.get('/', (req, res) => {
    res.json('Ok')
})


export default rotas