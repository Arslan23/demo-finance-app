import { ApiProperty } from "@nestjs/swagger";
import { Claimant } from "src/claimant/entities/claimant.entity";
import { LoanType } from "src/loan-type/entities/loan-type.entity";
import ShortUniqueId from "short-unique-id";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    @Column({nullable: true, type: 'double'})
    amount: number;

    @ApiProperty()
    @Column({nullable: true, type: 'float'})
    duration: number;

    @ApiProperty()
    @Column({nullable: true, type: 'double'})
    annual_income: number;

    @ApiProperty()
    @ManyToOne( type => LoanType, loantype => loantype.loanRequests)
    loantype: LoanType
    
    
    @ApiProperty()
    @ManyToOne(()=> Claimant, claimant => claimant.id)
    claimant: Claimant;

    @ApiProperty()
    @Column({default: true})
    deferred_month: number;

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

    @BeforeInsert()
    setReference() {
        const uid = new ShortUniqueId({ length: 6 });
        this.reference = 'D-' + uid();
    }

}
