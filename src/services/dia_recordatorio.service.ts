import { AppDataSource } from "../config/appdatasource";
import { DiaRecordatorio } from "../entities/dia_recordatorio";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(DiaRecordatorio);

export const insertarDiaRecordatorio = async (data: Partial<DiaRecordatorio>) => {
    await repository.save(data);
}

export const listarDiasRecordatorio = async (): Promise<DiaRecordatorio[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, 
        recordatorio: {estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['recordatorio', 'recordatorio.usuario','recordatorio.medicamento','recordatorio.frecuencia']});
}

export const obtenerDiaRecordatorio = async (idDiaRecordatorio: number): Promise<DiaRecordatorio> => {
    return await repository.findOne({ where: { idDiaRecordatorio, estadoAuditoria: EstadoAuditoria.ACTIVO, recordatorio:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['recordatorio']});
}

export const actualizarDiaRecordatorio = async (idDiaRecordatorio: number, data: Partial<DiaRecordatorio>) => {
    await repository.update(idDiaRecordatorio, data);
}

export const darBajaDiaRecordatorio = async (idDiaRecordatorio: number): Promise<void> => {
    await repository.update(idDiaRecordatorio, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
