import { Request, Response } from "express";
import { Recordatorio } from "../entities/recordatorio";
import * as recordatorioService from "../services/recordatorio.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarRecordatorio = async (req: Request, res: Response) => {
    try {
        const recordatorio: Partial<Recordatorio> = req.body;
        await recordatorioService.insertarRecordatorio(recordatorio);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarRecordatorios = async (req: Request, res: Response) => {
    try {
        const recordatorios = await recordatorioService.listarRecordatorios();
        res.json(BaseResponse.success(recordatorios));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idRecordatorio } = req.params;
        const recordatorio: Recordatorio = await recordatorioService.obtenerRecordatorio(Number(idRecordatorio));
        if (!recordatorio) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(recordatorio));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idRecordatorio } = req.params;
        const recordatorio: Partial<Recordatorio> = req.body;
        if (!(await recordatorioService.obtenerRecordatorio(Number(idRecordatorio)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await recordatorioService.actualizarRecordatorio(Number(idRecordatorio), recordatorio);
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idRecordatorio } = req.params;
        if (!(await recordatorioService.obtenerRecordatorio(Number(idRecordatorio)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await recordatorioService.darBajaRecordatorio(Number(idRecordatorio));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarRecordatoriosPorUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        const recordatorios = await recordatorioService.listarRecordatoriosPorUsuario(Number(idUsuario));
        res.json(BaseResponse.success(recordatorios));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}