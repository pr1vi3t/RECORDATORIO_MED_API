import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/Usuario";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    await repository.save(usuario);
}

export const listarUsuarios = async (): Promise<Usuario[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}