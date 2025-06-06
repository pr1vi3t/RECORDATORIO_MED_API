import { AppDataSource } from "../config/appdatasource";
import { TipoMedicamento } from "../entities/tipo_medicamento";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(TipoMedicamento);

export const insertarTipoMedicamento = async (data: Partial<TipoMedicamento>) => {
    await repository.save(data);
}

export const listarTipoMedicamento = async (): Promise<TipoMedicamento[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerTipoMedicamento = async (idTipoMedicamento: number): Promise<TipoMedicamento> => {
    return await repository.findOne({ where: { idTipoMedicamento, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarTipoMedicamento = async (idTipoMedicamento: number, data: Partial<TipoMedicamento>) => {
    await repository.update(idTipoMedicamento, data);
}

export const darBajaTipoMedicamento = async (idTipoMedicamento: number): Promise<void> => {
    await repository.update(idTipoMedicamento, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
