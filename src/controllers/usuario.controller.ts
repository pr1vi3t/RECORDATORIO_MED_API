
import { Request, Response } from "express";
import { Usuario } from "../entities/Usuario";
import * as usuarioService from "../services/usuario.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuario: Partial<Usuario> = req.body;
        await usuarioService.insertarUsuario(usuario);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.listarUsuarios();
        res.json(BaseResponse.success(usuarios));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
