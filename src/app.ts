import express, { Application, Request, Response } from 'express';
import { AppDataSource } from './config/appdatasource';
import usuarioRouter from './routes/usuario.route';
import tipoMedicamentoRouter from './routes/tipo_medicamento.route';
import unidadDosisRouter from './routes/unidad_dosis.route';
import presentacionMedicamentoRouter from './routes/presentacion_medicamento.route';
import medicamentoRouter from './routes/medicamento.route';
import recordatorioRouter from './routes/recordatorio.route';
import diaRecordatorioRouter from './routes/dia_recordatorio.route';
import frecuenciaRouter from './routes/frecuencia.route';

const app: Application = express();

app.use(express.json());
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/tipos-medicamento', tipoMedicamentoRouter);
app.use('/api/v1/unidades-dosis', unidadDosisRouter);
app.use('/api/v1/presentaciones-medicamento', presentacionMedicamentoRouter);
app.use('/api/v1/medicamentos', medicamentoRouter);
app.use('/api/v1/recordatorios', recordatorioRouter);
app.use('/api/v1/dias-recordatorio', diaRecordatorioRouter);
app.use('/api/v1/frecuencias', frecuenciaRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;