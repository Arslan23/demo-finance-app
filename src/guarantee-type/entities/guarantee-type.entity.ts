import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class GuaranteeType extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;

    @ApiProperty()
    @Column({type: "varchar",length: 150, nullable: true})
    guarantee_type: string;

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
