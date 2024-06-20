import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Post from "../modelos/Post";

export default class PostControlador {
    listar(req: Request, res: Response) {
        return res.status(200).json(posts)
    }

    detalhar(req: Request, res: Response) {
        const { id } = req.params

        const post = posts.find((element) => {
            return element.id === id
        })

        if(!post) {
            return res.status(404).json({
                mensagem: "A postagem não existe!"
            })
        }

        return res.status(200).json(post)
    }

    cadastrar(req: Request, res: Response) {
        const { titulo, descricao, autor_id } = req.body

        if(!titulo || !descricao || !autor_id) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatorios"
            })
        }

        const autor = autores.find((element) => {
            return element.id === autor_id
        })

        if(!autor) {
            return res.status(400).json({
                mensagem: " O Autor não existe!"
            })
        }

        const post = new Post({
            titulo,
            descricao,
            autor
        })

        posts.push(post)

        return res.status(201).json(post)
    }
    
    editar(req: Request, res: Response) {
        const { id } = req.params
        const { titulo, descricao } = req.body
 
        const post = posts.find((element) => {
            return element.id === id
        })

        if(!post) {
            return res.status(404).json({
                mensagem: "A postagem não existe!"
            })
        }

        if(!titulo || !descricao) {
            return res.status(404).json({
                mensagem: "Todos os campos deverão estar preenchidos!"
            })
        }

        post.titulo = titulo
        post.descricao = descricao

        return res.status(204).send()
    }

    excluir(req: Request, res: Response) {
        const { id } = req.params
        const postIndex = posts.findIndex((elemento) => {
            return elemento.id === id
        })

        if(postIndex === -1) {
            return res.status(404).json({
                mensagem: "Elemento post não existe!"
            })
        }

        posts.splice(postIndex, 1)
        
        return res.status(201).send()
    }
}