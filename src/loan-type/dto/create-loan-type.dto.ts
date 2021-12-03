import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLoanTypeDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    amount_min: number;

    @ApiProperty()
    @IsNotEmpty()
    amount_max: number;

    @ApiProperty()
    @IsNotEmpty()
    duration_min: number;

    @ApiProperty()
    @IsNotEmpty()
    duration_max: number;

    @ApiProperty()
    @IsNotEmpty()
    interest_rate: number;
}
