import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNotEmptyObject, Max, Min, ValidateNested, ArrayNotEmpty } from "class-validator";
import { CreateClaimantDto } from "src/claimant/dto/create-claimant.dto";
import { LoanType } from "src/loan-type/entities/loan-type.entity";

export class CreateLoanRequestDto {
    
    @ApiProperty()
    reference: string;

    @ApiProperty()
    @IsNotEmpty()
    @Min(20000) // @todo: make configurable
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    deferred_month: number;

    @ApiProperty()
    @IsNotEmpty()
    @Min(3) // @todo: make configurable
    @Max(24) // @todo: make configurable
    duration: number;


    @ApiProperty()
    @IsNotEmpty()
    annual_income: number;

    @ApiProperty()
    @IsNotEmpty()
    loanType: LoanType;

    @ApiProperty()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateClaimantDto)
    claimant: CreateClaimantDto;

    @ApiProperty()
    @ArrayNotEmpty()
    guarantee;

}
