import { Request, Response } from "express";
import * as HistorialTomaService from "../services/historial_toma.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { HistorialToma } from "../entities/historial_toma";

export const insertarHistorialToma = async (req: Request, res: Response) => {
    try {
        const HistorialToma: Partial<HistorialToma> = req.body;
        await HistorialTomaService.insertarHistorialToma(HistorialToma);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarHistorialToma = async (req: Request, res: Response) => {
    try {
        const HistorialTomas = await HistorialTomaService.listarHistorialToma();
        res.json(BaseResponse.success(HistorialTomas));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerHistorialToma = async (req: Request, res: Response) => {
    try {
        const { idHistorialToma } = req.params
        const HistorialToma: HistorialToma = await HistorialTomaService.obtenerHistorialToma(Number(idHistorialToma));
        if (!HistorialToma) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(HistorialToma));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarHistorialToma = async (req: Request, res: Response) => {
    try {
        const { idHistorialToma } = req.params;
        const HistorialToma: Partial<HistorialToma> = req.body;
        if (!(await HistorialTomaService.obtenerHistorialToma(Number(idHistorialToma)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await HistorialTomaService.actualizarHistorialToma(Number(idHistorialToma), HistorialToma)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaHistorialToma = async (req: Request, res: Response) => {
    try {
        const { idHistorialToma } = req.params;
        if (!(await HistorialTomaService.obtenerHistorialToma(Number(idHistorialToma)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await HistorialTomaService.darBajaHistorialToma(Number(idHistorialToma));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}