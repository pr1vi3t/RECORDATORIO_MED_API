import { AppDataSource } from "../config/appdatasource";
import { ContactoEmergencia } from "../entities/contacto_emergencia";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(ContactoEmergencia);

export const insertarContactoEmergencia = async (data: Partial<ContactoEmergencia>) => {
    await repository.save(data);
}

export const listarContactoEmergencia = async (): Promise<ContactoEmergencia[]> => {
    return await repository.find({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO, usuario:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['usuario']
    });     
}

export const obtenerContactoEmergencia = async (idContactoEmergencia: number): Promise<ContactoEmergencia> => {
    return await repository.findOne({ where: { idContactoEmergencia, estadoAuditoria: EstadoAuditoria.ACTIVO, usuario:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['usuario']
    });    
}

export const actualizarContactoEmergencia = async (idContactoEmergencia: number, data: Partial<ContactoEmergencia>) => {
    await repository.update(idContactoEmergencia, data);
}

export const darBajaContactoEmergencia = async (idContactoEmergencia: number): Promise<void> => {
    await repository.update(idContactoEmergencia, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
