import { Router } from "express"
import AutorControlador from "./controladores/AutorControlador"
import PostControlador from "./controladores/PostControlador"

const rotas = Router()

const autorControlador = new AutorControlador()
const postControlador = new PostControlador()

rotas.get('/autores', autorControlador.listar)
rotas.get('/autores/:id', autorControlador.detalhar)
rotas.post('/autores', autorControlador.cadastrar)
rotas.put('/autores/:id', autorControlador.editar)
rotas.delete('/autores/:id', autorControlador.excluir)

rotas.get('/postagens', postControlador.listar)
rotas.get('/postagens/:id', postControlador.detalhar)
rotas.post('/postagens', postControlador.cadastrar)
rotas.patch('/postagens/:id', postControlador.editar)
rotas.delete('/postagens/:id', postControlador.excluir)

export default rotas