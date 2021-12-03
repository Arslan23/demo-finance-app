import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Claimant } from "src/claimant/entities/claimant.entity";
import { Guarantee } from "src/guarantee/entities/guarantee.entity";
import { LoanType } from "src/loan-type/entities/loan-type.entity";

export class CreateLoanClaimantRequestDto {
    
  /*  @ApiProperty()
    @IsNotEmpty()
    reference: string;

    @ApiProperty()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    deferred_month: string;

    @ApiProperty()
    @IsNotEmpty()
    duration: number;


    @ApiProperty()
    @IsNotEmpty()
    annual_income: number;

    @ApiProperty()
    @IsNotEmptyObject()
    loanType: LoanType;

    @ApiProperty()
    @IsNotEmptyObject()
    claimant: Claimant;*/
  

    @ApiProperty()
    @IsNotEmpty()
    idcard1: string;

    @ApiProperty()
    @IsNotEmpty()
    idcard2: string;


    @ApiProperty()
    @IsNotEmpty()
    name1: string;

    
    @ApiProperty()
    @IsNotEmpty()
    name2: string;

}
