import { Router } from "express"
import AutorControlador from "./controladores/autorControlador"

const rotas = Router()

const autorControlador = new AutorControlador()

rotas.get('/autores', autorControlador.listar)


export default rotas