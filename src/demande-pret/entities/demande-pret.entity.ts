import { ApiProperty } from "@nestjs/swagger";
import { Demandeur } from "src/demandeur/entities/demandeur.entity";
import { TypeDePret } from "src/type-de-pret/entities/type-de-pret.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class DemandePret extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
   
    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;
    
    @ApiProperty()
    @Column()
    reference: string;
    
    @ApiProperty()
    @Column({nullable: true, type: 'double'})
    amount: number;

    @ApiProperty()
    @Column({nullable: true, type: 'float'})
    duration: number;

    @ApiProperty()
    @Column({nullable: true, type: 'double'})
    annual_income: number;

    @ApiProperty()
    @ManyToOne(()=> TypeDePret, type_de_pret => type_de_pret.demandePrets)
    typeDePret: TypeDePret
    
    @ApiProperty()
    @ManyToOne(()=> Demandeur, demandeur => demandeur.id)
    demandeur: Demandeur;

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
