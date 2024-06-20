import { Request, Response } from "express";
import { autores } from "../bancoDeDados";

export default class AutorControlador {
    listar(req: Request, res: Response) {
        res.status(200).json(autores)
    }
}