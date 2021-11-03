import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLoanTypeDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    amount_min: number;

    @ApiProperty()
    @IsNumber()
    amount_max: number;

    @ApiProperty()
    @IsNumber()
    duration_min: number;

    @ApiProperty()
    @IsNumber()
    duration_max: number;

    @ApiProperty()
    @IsNumber()
    interest_rate: number;
}
