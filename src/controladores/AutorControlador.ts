import { Request, Response } from "express";
import { autores } from "../bancoDeDados";
import Autor from "../modelos/Autor";

export default class AutorControlador {
    listar(req: Request, res: Response) {
        res.status(200).json(autores)
    }

    detalhar(req: Request, res: Response) {
        const { id } = req.params
        
        const autor = autores.find((item) => {
            return item.id === id
        })

        if(!autor) {
            return res.status(404).json({
                mensagem: "Autor não encontrado!"
            })
        }
        
        return res.status(200).json(autor)
    }

    cadastrar(req: Request, res: Response) {
        const { nome, idade } = req.body

        if(!nome || !idade) {
            return res.status(400).json({
                mensagem: "O nome e a idade do autor são obrigatórios!"
            })
        }

        const autor = new Autor({
            nome,
            idade
        })

        autores.push(autor)
        
        return res.status(201).json(autor)
    }
    
    editar(req: Request, res: Response) {
        const { id } = req.params
        const { nome, idade } = req.body

        if(!nome || !idade) {
            return res.status(400).json({
                mensagem: "O nome e a idade do autor são obrigatórios!"
            })
        }

        const autor = autores.find((item) => {
            return item.id === id
        })

        if(!autor) {
            return res.status(404).json({
                mensagem: "Autor não encontrado!"
            })
        }

        autor.nome = nome
        autor.idade = idade

        return res.status(204).send()
    }

    excluir(req: Request, res: Response) {
        const { id } = req.params

        const autorIndice = autores.findIndex((item) => {
            return item.id === id
        })

        if(autorIndice === -1) {
            return res.status(404).json({
                mensagem: "Autor não encontrado!"
            })
        }

        autores.splice(autorIndice, 1)
        
        return res.status(204).send()
    }
}