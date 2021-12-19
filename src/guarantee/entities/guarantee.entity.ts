import { ApiProperty } from "@nestjs/swagger";
import { Document } from "src/document/entities/document.entity";
import { LoanRequest } from "src/loan-request/entities/loan-request.entity";
import { GuaranteeType } from "src/guarantee-type/entities/guarantee-type.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GuarantieTypeController } from "src/guarantee-type/guarantee-type.controller";

@Entity()
export class Guarantee  extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;
    
    @ApiProperty()
    @ManyToOne(()=> LoanRequest, loanRequest => loanRequest.id)
    loanRequest: LoanRequest;
    
    @ApiProperty()
    @ManyToOne(()=> GuaranteeType, guaranteeType => guaranteeType.id)
    guaranteeType: GuaranteeType;

    @ApiProperty()
    @Column({nullable: true})
    path: string;
    
    /*@ApiProperty()
    @Column({nullable: true})
    idcard1: string;
    
    @ApiProperty()
    @Column({nullable: true})
    idcard2: string;*/

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
