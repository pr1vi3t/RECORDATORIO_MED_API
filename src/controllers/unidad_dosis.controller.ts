import { Request, Response } from "express";
import * as UnidadDosisService from "../services/unidad_dosis.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { UnidadDosis } from "../entities/unidad_dosis";

export const insertarUnidadDosis = async (req: Request, res: Response) => {
    try {
        const UnidadDosis: Partial<UnidadDosis> = req.body;
        await UnidadDosisService.insertarUnidadDosis(UnidadDosis);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarUnidadDosis = async (req: Request, res: Response) => {
    try {
        const UnidadDosis = await UnidadDosisService.listarUnidadDosis();
        res.json(BaseResponse.success(UnidadDosis));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerUnidadDosis = async (req: Request, res: Response) => {
    try {
        const { idUnidadDosis } = req.params
        const UnidadDosis: UnidadDosis = await UnidadDosisService.obtenerUnidadDosis(Number(idUnidadDosis));
        if (!UnidadDosis) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(UnidadDosis));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarUnidadDosis = async (req: Request, res: Response) => {
    try {
        const { idUnidadDosis } = req.params;
        const UnidadDosis: Partial<UnidadDosis> = req.body;
        if (!(await UnidadDosisService.obtenerUnidadDosis(Number(idUnidadDosis)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await UnidadDosisService.actualizarUnidadDosis(Number(idUnidadDosis), UnidadDosis)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaUnidadDosis = async (req: Request, res: Response) => {
    try {
        const { idUnidadDosis } = req.params;
        if (!(await UnidadDosisService.obtenerUnidadDosis(Number(idUnidadDosis)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await UnidadDosisService.darBajaUnidadDosis(Number(idUnidadDosis));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}