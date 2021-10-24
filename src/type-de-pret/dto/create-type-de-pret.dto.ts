import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTypeDePretDto {
    @IsNotEmpty()
    name: string;

    @IsNumber()
    amount_min: number;

    @IsNumber()
    amount_max: number;

    @IsNumber()
    duration_min: number;


    @IsNumber()
    duration_max: number;

    @IsNumber()
    interest_rate: number;
}
