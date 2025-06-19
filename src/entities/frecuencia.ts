import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Recordatorio } from './recordatorio';

@Entity('frecuencias')
export class Frecuencia {
    @PrimaryGeneratedColumn({ name: 'id_frecuencia' })
    idFrecuencia: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @OneToMany(() => Recordatorio, (recordatorio) => recordatorio.frecuencia)
    frecuencias: Frecuencia[];

}