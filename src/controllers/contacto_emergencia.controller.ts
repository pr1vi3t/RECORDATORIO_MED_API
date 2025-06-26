import { Request, Response } from "express";
import * as ContactoEmergenciaService from "../services/contacto_emergencia.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { ContactoEmergencia } from "../entities/contacto_emergencia";

export const insertarContactoEmergencia = async (req: Request, res: Response) => {
    try {
        const ContactoEmergencia: Partial<ContactoEmergencia> = req.body;
        await ContactoEmergenciaService.insertarContactoEmergencia(ContactoEmergencia);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarContactoEmergencia = async (req: Request, res: Response) => {
    try {
        const ContactoEmergencias = await ContactoEmergenciaService.listarContactoEmergencia();
        res.json(BaseResponse.success(ContactoEmergencias));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerContactoEmergencia = async (req: Request, res: Response) => {
    try {
        const { idContactoEmergencia } = req.params
        const ContactoEmergencia: ContactoEmergencia = await ContactoEmergenciaService.obtenerContactoEmergencia(Number(idContactoEmergencia));
        if (!ContactoEmergencia) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(ContactoEmergencia));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarContactoEmergencia = async (req: Request, res: Response) => {
    try {
        const { idContactoEmergencia } = req.params;
        const ContactoEmergencia: Partial<ContactoEmergencia> = req.body;
        if (!(await ContactoEmergenciaService.obtenerContactoEmergencia(Number(idContactoEmergencia)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await ContactoEmergenciaService.actualizarContactoEmergencia(Number(idContactoEmergencia), ContactoEmergencia)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaContactoEmergencia = async (req: Request, res: Response) => {
    try {
        const { idContactoEmergencia } = req.params;
        if (!(await ContactoEmergenciaService.obtenerContactoEmergencia(Number(idContactoEmergencia)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await ContactoEmergenciaService.darBajaContactoEmergencia(Number(idContactoEmergencia));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}