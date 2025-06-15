import { Request, Response } from "express";
import * as PresentacionMedicamentoService from "../services/presentacion_medicamento.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { PresentacionMedicamento } from "../entities/presentacion_medicamento";

export const insertarPresentacionMedicamento = async (req: Request, res: Response) => {
    try {
        const PresentacionMedicamento: Partial<PresentacionMedicamento> = req.body;
        await PresentacionMedicamentoService.insertarPresentacionMedicamento(PresentacionMedicamento);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarPresentacionMedicamento = async (req: Request, res: Response) => {
    try {
        const PresentacionMedicamento = await PresentacionMedicamentoService.listarPresentacionMedicamento();
        res.json(BaseResponse.success(PresentacionMedicamento));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerPresentacionMedicamento = async (req: Request, res: Response) => {
    try {
        const { idPresentacionMedicamento } = req.params
        const PresentacionMedicamento: PresentacionMedicamento = await PresentacionMedicamentoService.obtenerPresentacionMedicamento(Number(idPresentacionMedicamento));
        if (!PresentacionMedicamento) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(PresentacionMedicamento));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarPresentacionMedicamento = async (req: Request, res: Response) => {
    try {
        const { idPresentacionMedicamento } = req.params;
        const PresentacionMedicamento: Partial<PresentacionMedicamento> = req.body;
        if (!(await PresentacionMedicamentoService.obtenerPresentacionMedicamento(Number(idPresentacionMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await PresentacionMedicamentoService.actualizarPresentacionMedicamento(Number(idPresentacionMedicamento), PresentacionMedicamento)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaPresentacionMedicamento = async (req: Request, res: Response) => {
    try {
        const { idPresentacionMedicamento } = req.params;
        if (!(await PresentacionMedicamentoService.obtenerPresentacionMedicamento(Number(idPresentacionMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await PresentacionMedicamentoService.darBajaPresentacionMedicamento(Number(idPresentacionMedicamento));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}