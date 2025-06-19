import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from './usuario';
import { Medicamento } from './medicamento';
import { Frecuencia } from './frecuencia';
import { DiaRecordatorio } from './dia_recordatorio';

@Entity('recordatorios')
export class Recordatorio {
    @PrimaryGeneratedColumn({ name: 'id_recordatorio' })
    idRecordatorio: number;

    @ManyToOne(() => Usuario, (usuarios) => usuarios.usuarios)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @ManyToOne(() => Medicamento, (medicamentos) => medicamentos.medicamentos)
    @JoinColumn({ name: 'id_medicamento' })
    medicamento: Medicamento;

    @ManyToOne(() => Frecuencia, (frecuencias) => frecuencias.frecuencias)
    @JoinColumn({ name: 'id_frecuencia' })
    frecuencia: Frecuencia;

    @Column({ name: 'fecha_inicio' })
    fechaInicio: Date;

    @Column({ name: 'fecha_fin' })
    fechaFin: Date;

    @Column({ name: 'hora' })
    hora: string;

    @Column({ name: 'notas' })
    notas: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @OneToMany(() => DiaRecordatorio, (diaRecordatorio) => diaRecordatorio.recordatorio)
    recordatorios: Recordatorio[];
}