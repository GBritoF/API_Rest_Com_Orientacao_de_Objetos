import { v4 as uuidv4  } from "uuid"
import Autor from "./Autor"

type TPost = {
    titulo: string
    descricao: string
    autor: Autor
}

export default class Post {
    readonly id: string
    titulo: string
    descricao: string
    autor: Autor
    data_criacao: Date

    constructor(post: TPost) {
        this.id = this.geralId()
        this.titulo = post.titulo
        this.descricao = post.descricao
        this.autor = post.autor
        this.data_criacao = new Date()
    }

    private geralId(): string {
        return uuidv4()
    }

}