import { ApiProperty } from "@nestjs/swagger";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { Document } from "src/document/entities/document.entity";
import { TypeGarantie } from "src/type-garantie/entities/type-garantie.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Garantie  extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;
    
    @ApiProperty()
    @ManyToOne(()=> DemandePret, demandePret => demandePret.id)
    demandePret: DemandePret;
    
    @ApiProperty()
    @ManyToOne(()=> TypeGarantie, typeGarantie => typeGarantie.id)
    typeGarantie: TypeGarantie;

    @ApiProperty()
    @ManyToOne(()=> Document, document => document.id)
    document: Document;
    
    @ApiProperty()
    @Column({nullable: true})
    idcard1: string;
    
    @ApiProperty()
    @Column({nullable: true})
    idcard2: string;

    @ApiProperty()
    @Column({default: true})
    isActive: boolean;
    
    @ApiProperty()
    @Column({default: false})
    isDeleted: boolean;
    
    @ApiProperty()
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @ApiProperty()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
