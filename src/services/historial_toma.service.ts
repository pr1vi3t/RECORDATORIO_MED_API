import { AppDataSource } from "../config/appdatasource";
import { HistorialToma } from "../entities/historial_toma";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(HistorialToma);

export const insertarHistorialToma = async (data: Partial<HistorialToma>) => {
    await repository.save(data);
}

export const listarHistorialToma = async (): Promise<HistorialToma[]> => {
    return await repository.find({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO, recordatorio:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['recordatorio']
    });     
}

export const obtenerHistorialToma = async (idHistorialToma: number): Promise<HistorialToma> => {
    return await repository.findOne({ where: { idHistorialToma, estadoAuditoria: EstadoAuditoria.ACTIVO, recordatorio:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['recordatorio']
    });    
}

export const actualizarHistorialToma = async (idHistorialToma: number, data: Partial<HistorialToma>) => {
    await repository.update(idHistorialToma, data);
}

export const darBajaHistorialToma = async (idHistorialToma: number): Promise<void> => {
    await repository.update(idHistorialToma, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}