import { BaseEntity } from "src/common/entities/base.entity";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { Document } from "src/document/entities/document.entity";
import { TypeGarantie } from "src/type-garantie/entities/type-garantie.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Garantie  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @ManyToOne(()=> DemandePret, demandePret => demandePret.id)
    demandePret: DemandePret;

    @ManyToOne(()=> TypeGarantie, typeGarantie => typeGarantie.id)
    typeGarantie: TypeGarantie;

    @ManyToOne(()=> Document, document => document.id)
    document: Document;

    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;
}
