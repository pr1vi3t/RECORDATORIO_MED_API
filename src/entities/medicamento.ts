import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoMedicamento } from "./tipo_medicamento";
import { PresentacionMedicamento } from "./presentacion_medicamento";
import { UnidadDosis } from "./unidad_dosis";
import { Recordatorio } from "./recordatorio";

@Entity('medicamentos')
export class Medicamento {

    @PrimaryGeneratedColumn({ name: 'id_medicamento' })
    idMedicamento: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'imagen_url' })
    imagenUrl: string;

    @ManyToOne(() => TipoMedicamento, (tipos_medicamento) => tipos_medicamento.tiposMedicamento)
    @JoinColumn({ name: 'id_tipo_medicamento' })
    tipoMedicamento: TipoMedicamento;

    @ManyToOne(() => PresentacionMedicamento, (presentaciones_medicamento) => presentaciones_medicamento.presentacionesMedicamento)
    @JoinColumn({ name: 'id_presentacion_medicamento' })
    presentacionMedicamento: PresentacionMedicamento;

    @ManyToOne(() => UnidadDosis, (unidades_dosis) => unidades_dosis.unidadesDosis)
    @JoinColumn({ name: 'id_unidad_dosis' })
    unidadDosis: UnidadDosis;

    @Column({ name: 'dosis_cantidad' })
    dosis_cantidad: number;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @OneToMany(() => Recordatorio, (recordatorio) => recordatorio.medicamento)
    medicamentos: Medicamento[];
}