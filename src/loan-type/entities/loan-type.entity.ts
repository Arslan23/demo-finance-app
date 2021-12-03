import { ApiProperty } from "@nestjs/swagger";
import { LoanRequest } from "src/loan-request/entities/loan-request.entity";
import { BaseEntity, Column, CreateDateColumn, Double, Entity, Generated, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class LoanType extends BaseEntity {
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
    @Column('double')
    amount_min: number;

    @ApiProperty()
    @Column('double')
    amount_max: number;

    @ApiProperty()
    @Column('integer')
    duration_min: number;

    @ApiProperty()
    @Column('integer')
    duration_max: number;

    @ApiProperty()
    @Column('double')
    interest_rate: number;

    @ApiProperty()
    @OneToMany(()=> LoanRequest, loanRequest => loanRequest.loantype)
    loanRequests: LoanRequest[];

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
