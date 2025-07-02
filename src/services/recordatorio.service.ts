import { AppDataSource } from "../config/appdatasource";
import { Recordatorio } from "../entities/recordatorio";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Recordatorio);

export const insertarRecordatorio = async (data: Partial<Recordatorio>) => {
    await repository.save(data);
}

export const listarRecordatorios = async (): Promise<Recordatorio[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO, 
        usuario:{estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        medicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        frecuencia:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['usuario','medicamento','frecuencia']});
}

export const obtenerRecordatorio = async (idRecordatorio: number): Promise<Recordatorio> => {
    return await repository.findOne({ where: { idRecordatorio, estadoAuditoria: EstadoAuditoria.ACTIVO,usuario:{estadoAuditoria: EstadoAuditoria.ACTIVO}, medicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, frecuencia:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['usuario','medicamento','frecuencia'] });
}

export const actualizarRecordatorio = async (idRecordatorio: number, data: Partial<Recordatorio>) => {
    await repository.update(idRecordatorio, data);
}

export const darBajaRecordatorio = async (idRecordatorio: number): Promise<void> => {
    await repository.update(idRecordatorio, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}

export const listarRecordatoriosPorUsuario = async (idUsuario: number): Promise<Recordatorio[]> => {
    return await repository.find({where: {
        estadoAuditoria: EstadoAuditoria.ACTIVO,
        usuario: { idUsuario, estadoAuditoria: EstadoAuditoria.ACTIVO },
        medicamento: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        frecuencia: { estadoAuditoria: EstadoAuditoria.ACTIVO }
    },
    relations: ['usuario','medicamento','frecuencia', 'medicamento.unidadDosis', 'recordatorios']});
}
