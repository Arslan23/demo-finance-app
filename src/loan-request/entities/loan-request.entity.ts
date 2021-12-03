import { ApiProperty } from "@nestjs/swagger";
import { Claimant } from "src/claimant/entities/claimant.entity";
import { Guarantee } from "src/guarantee/entities/guarantee.entity";
import { LoanType } from "src/loan-type/entities/loan-type.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LoanRequest extends BaseEntity {
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
    @Column('double')
    amount: number;

    @ApiProperty()
    @Column('float')
    duration: number;

    @ApiProperty()
    @Column('double')
    annual_income: number;

    @ApiProperty()
    @ManyToOne(()=> LoanType, loantype => loantype.loanRequests)
    loantype: LoanType
    
    @ApiProperty()
    @ManyToOne(()=> Claimant, claimant => claimant.id)
    claimant: Claimant;

    @ApiProperty()
    @Column({default: true})
    deferred_month: string;

    @ApiProperty()
    @Column({nullable: true})
    idcard1: string;
    
    @ApiProperty()
    @Column({nullable: true})
    idcard2: string;

    @ApiProperty()
    @Column({nullable: true})
    filename1: string;

    @ApiProperty()
    @Column({nullable: true})
    filename2: string;

    @ApiProperty()
    @Column({nullable: true})
    name1: string;

    @ApiProperty()
    @Column({nullable: true})
    name2: string;

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
