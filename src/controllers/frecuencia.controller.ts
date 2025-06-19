import { Request, Response } from "express";
import { Frecuencia } from "../entities/frecuencia";
import * as frecuenciaService from "../services/frecuencia.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarFrecuencia = async (req: Request, res: Response) => {
    try {
        const frecuencia: Partial<Frecuencia> = req.body;
        await frecuenciaService.insertarFrecuencia(frecuencia);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarFrecuencias = async (req: Request, res: Response) => {
    try {
        const frecuencias = await frecuenciaService.listarFrecuencias();
        res.json(BaseResponse.success(frecuencias));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerFrecuencia = async (req: Request, res: Response) => {
    try {
        const { idFrecuencia } = req.params
        const frecuencia: Frecuencia = await frecuenciaService.obtenerFrecuencia(Number(idFrecuencia));
        if (!frecuencia) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(frecuencia));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idFrecuencia } = req.params;
        const frecuencia: Partial<Frecuencia> = req.body;
        if (!(await frecuenciaService.obtenerFrecuencia(Number(idFrecuencia)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await frecuenciaService.actualizarFrecuencia(Number(idFrecuencia), frecuencia)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const { idFrecuencia } = req.params;
        if (!(await frecuenciaService.obtenerFrecuencia(Number(idFrecuencia)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await frecuenciaService.darBajaFrecuencia(Number(idFrecuencia));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}