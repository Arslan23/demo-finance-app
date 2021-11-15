import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Claimant } from "src/claimant/entities/claimant.entity";
import { LoanType } from "src/loan-type/entities/loan-type.entity";

export class CreateLoanRequestDto {
    
    @ApiProperty()
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
    claimant: Claimant;

}
