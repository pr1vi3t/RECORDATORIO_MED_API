import { Request, Response } from "express";
import { DiaRecordatorio } from "../entities/dia_recordatorio";
import * as diaRecordatorioService from "../services/dia_recordatorio.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarDiaRecordatorio = async (req: Request, res: Response) => {
    try {
        const diaRecordatorio: Partial<DiaRecordatorio> = req.body;
        await diaRecordatorioService.insertarDiaRecordatorio(diaRecordatorio);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarDiasRecordatorio = async (req: Request, res: Response) => {
    try {
        const diasRecordatorio = await diaRecordatorioService.listarDiasRecordatorio();
        res.json(BaseResponse.success(diasRecordatorio));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerDiaRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idDiaRecordatorio } = req.params;
        const diaRecordatorio: DiaRecordatorio = await diaRecordatorioService.obtenerDiaRecordatorio(Number(idDiaRecordatorio));
        if (!diaRecordatorio) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(diaRecordatorio));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarDiaRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idDiaRecordatorio } = req.params;
        const diaRecordatorio: Partial<DiaRecordatorio> = req.body;
        if (!(await diaRecordatorioService.obtenerDiaRecordatorio(Number(idDiaRecordatorio)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await diaRecordatorioService.actualizarDiaRecordatorio(Number(idDiaRecordatorio), diaRecordatorio);
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaDiaRecordatorio = async (req: Request, res: Response) => {
    try {
        const { idDiaRecordatorio } = req.params;
        if (!(await diaRecordatorioService.obtenerDiaRecordatorio(Number(idDiaRecordatorio)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await diaRecordatorioService.darBajaDiaRecordatorio(Number(idDiaRecordatorio));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
