import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Recordatorio } from './recordatorio';

@Entity('historial_tomas')
export class HistorialToma {

    @PrimaryGeneratedColumn({ name: 'id_historial_toma' })
    idHistorialToma: number;

    @ManyToOne(() => Recordatorio, (recordatorios) => recordatorios.recordatorios_ht)
    @JoinColumn({ name: 'id_recordatorio' })
    recordatorio: Recordatorio;

    @Column({ name: 'fecha' })
    fecha: Date;

    @Column({ name: 'hora' })
    hora: string;

    @Column({ name: 'estado' })
    estado: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}   