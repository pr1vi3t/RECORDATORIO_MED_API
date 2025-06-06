import { Request, Response } from "express";
import * as tipoMedicamentoService from "../services/tipo_medicamento.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { TipoMedicamento } from "../entities/tipo_medicamento";

export const insertarTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const tipoMedicamento: Partial<TipoMedicamento> = req.body;
        await tipoMedicamentoService.insertarTipoMedicamento(tipoMedicamento);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const tipoMedicamentos = await tipoMedicamentoService.listarTipoMedicamento();
        res.json(BaseResponse.success(tipoMedicamentos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const { idTipoMedicamento } = req.params
        const tipoMedicamento: TipoMedicamento = await tipoMedicamentoService.obtenerTipoMedicamento(Number(idTipoMedicamento));
        if (!tipoMedicamento) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(tipoMedicamento));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const { idTipoMedicamento } = req.params;
        const tipoMedicamento: Partial<TipoMedicamento> = req.body;
        if (!(await tipoMedicamentoService.obtenerTipoMedicamento(Number(idTipoMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await tipoMedicamentoService.actualizarTipoMedicamento(Number(idTipoMedicamento), tipoMedicamento)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaTipoMedicamento = async (req: Request, res: Response) => {
    try {
        const { idTipoMedicamento } = req.params;
        if (!(await tipoMedicamentoService.obtenerTipoMedicamento(Number(idTipoMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await tipoMedicamentoService.darBajaTipoMedicamento(Number(idTipoMedicamento));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}