import { Router } from "express"
import AutorControlador from "./controladores/autorControlador"

const rotas = Router()

const autorControlador = new AutorControlador()

rotas.get('/autores', autorControlador.listar)

rotas.get('/autores/:id', autorControlador.detalhar)

rotas.post('/autores', autorControlador.cadastrar)

rotas.put('/autores/:id', autorControlador.editar)

rotas.delete('/autores/:id', autorControlador.excluir)

export default rotas