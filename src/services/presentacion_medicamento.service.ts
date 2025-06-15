import { AppDataSource } from "../config/appdatasource";
import { PresentacionMedicamento } from "../entities/presentacion_medicamento";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(PresentacionMedicamento);

export const insertarPresentacionMedicamento = async (data: Partial<PresentacionMedicamento>) => {
    await repository.save(data);
}

export const listarPresentacionMedicamento = async (): Promise<PresentacionMedicamento[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerPresentacionMedicamento = async (idPresentacionMedicamento: number): Promise<PresentacionMedicamento> => {
    return await repository.findOne({ where: { idPresentacionMedicamento, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarPresentacionMedicamento = async (idPresentacionMedicamento: number, data: Partial<PresentacionMedicamento>) => {
    await repository.update(idPresentacionMedicamento, data);
}

export const darBajaPresentacionMedicamento = async (idPresentacionMedicamento: number): Promise<void> => {
    await repository.update(idPresentacionMedicamento, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
