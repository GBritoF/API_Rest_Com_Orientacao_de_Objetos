import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = [
    new Autor({
        nome: "Gustavo Brito",
	    idade: 18
    })
]
export const posts: Post[] = [
    new Post({
        titulo: "Meu primeiro Post",
        descricao: "Descrição meu primeiro post",
        autor: new Autor({
            nome: "Gustavo Brito",
	        idade: 18
        })
    })
]