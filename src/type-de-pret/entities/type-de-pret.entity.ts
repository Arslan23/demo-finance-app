import { ApiProperty } from "@nestjs/swagger";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { BaseEntity, Column, CreateDateColumn, Double, Entity, Generated, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class TypeDePret extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;

    @ApiProperty()
    @Column({nullable: true})
    name: string;

    @ApiProperty()
    @Column({nullable: true, type: 'double'})
    amount_min: number;

    @ApiProperty()
    @Column({nullable: true, type: 'double'})
    amount_max: number;

    @ApiProperty()
    @Column({nullable: true, type: 'integer'})
    duration_min: number;

    @ApiProperty()
    @Column({nullable: true,  type: 'integer'})
    duration_max: number;

    @ApiProperty()
    @Column({nullable: true,  type: 'double'})
    interest_rate: number;

    @ApiProperty()
    @OneToMany(()=> DemandePret, demandePret => demandePret.typeDePret)
    demandePrets: DemandePret[];

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
