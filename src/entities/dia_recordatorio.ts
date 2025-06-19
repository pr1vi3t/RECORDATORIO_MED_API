import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Recordatorio } from './recordatorio';

@Entity('dias_recordatorio')
export class DiaRecordatorio {
  @PrimaryGeneratedColumn({ name: 'id_dia_recordatorio' })
  idDiaRecordatorio: number;

  @ManyToOne(() => Recordatorio, (recordatorios) => recordatorios.recordatorios)
  @JoinColumn({ name: 'id_recordatorio' })
  recordatorio: Recordatorio;

  @Column({ name: 'dia' })
  dia: number;

  @Column({ name: 'estado_auditoria'})
  estadoAuditoria: number;

  @Column({ name: 'fecha_creacion'})
  fechaCreacion: Date;
}