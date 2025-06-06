import 'dotenv/config';

export enum MensajeController {
    INSERTADO_OK = "Insertado correctamente",
    ACTUALIZADO_OK = "Actualizado correctamente",
    ELIMINADO_OK = "Eliminado correctamente",
    NO_ENCONTRADO = "No encontrado",

    LOGIN_OK = "Login exitoso",
    LOGIN_ERROR = "Credenciales incorrectas",
}

export const { 
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME, 
    DB_PASSWORD,
    DB_DATABASE 
} = process.env