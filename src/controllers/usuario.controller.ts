import { Request, Response } from "express";
import * as usuarioService from "../services/usuario.service";
import { Usuario } from '../entities/usuario';
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

export const obtenerUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params
        const usuario: Usuario = await usuarioService.obtenerUsuario(Number(idUsuario));
        if (!usuario) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(usuario));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        const usuario: Partial<Usuario> = req.body;
        if (!(await usuarioService.obtenerUsuario(Number(idUsuario)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await usuarioService.actualizarUsuario(Number(idUsuario), usuario)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        if (!(await usuarioService.obtenerUsuario(Number(idUsuario)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await usuarioService.darBajaUsuario(Number(idUsuario));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}

export const loginUsuario = async (req: Request, res: Response) => {
    try {
        const { correo, password } = req.body;

        const usuario = await usuarioService.loginUsuario(correo, password);

        if (!usuario) {
            res.status(401).json(BaseResponse.error(MensajeController.LOGIN_ERROR,404));
            return;
        }

        const { password: _, ...usuarioSinPassword } = usuario;

        res.json(BaseResponse.success(usuarioSinPassword, MensajeController.LOGIN_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

