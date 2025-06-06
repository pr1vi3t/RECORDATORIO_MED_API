import express, { Application, Request, Response } from 'express';
import { AppDataSource } from './config/appdatasource';
import usuarioRouter from './routes/usuario.route';
import tipoMedicamento from './routes/tipo_medicamento.route';
import unidadDosis from './routes/unidad_dosis.route';

const app: Application = express();

app.use(express.json());
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/tipos-medicamento', tipoMedicamento);
app.use('/api/v1/unidades-dosis', unidadDosis);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;