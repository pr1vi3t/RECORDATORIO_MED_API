import { Request, Response } from "express";
import * as MedicamentoService from "../services/medicamento.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Medicamento } from "../entities/medicamento";

export const insertarMedicamento = async (req: Request, res: Response) => {
    try {
        const Medicamento: Partial<Medicamento> = req.body;
        await MedicamentoService.insertarMedicamento(Medicamento);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarMedicamento = async (req: Request, res: Response) => {
    try {
        const Medicamentos = await MedicamentoService.listarMedicamento();
        res.json(BaseResponse.success(Medicamentos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerMedicamento = async (req: Request, res: Response) => {
    try {
        const { idMedicamento } = req.params
        const Medicamento: Medicamento = await MedicamentoService.obtenerMedicamento(Number(idMedicamento));
        if (!Medicamento) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        res.json(BaseResponse.success(Medicamento));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarMedicamento = async (req: Request, res: Response) => {
    try {
        const { idMedicamento } = req.params;
        const Medicamento: Partial<Medicamento> = req.body;
        if (!(await MedicamentoService.obtenerMedicamento(Number(idMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await MedicamentoService.actualizarMedicamento(Number(idMedicamento), Medicamento)
        res.json(BaseResponse.success(MensajeController.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaMedicamento = async (req: Request, res: Response) => {
    try {
        const { idMedicamento } = req.params;
        if (!(await MedicamentoService.obtenerMedicamento(Number(idMedicamento)))) {
            res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
            return;
        }
        await MedicamentoService.darBajaMedicamento(Number(idMedicamento));
        res.json(BaseResponse.success(MensajeController.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(400).json(BaseResponse.error(error.message));
    }
}