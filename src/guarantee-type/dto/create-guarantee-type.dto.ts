import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateGuaranteeTypeDto {
    @ApiProperty()
    @IsNotEmpty()
    guarantee_type: string;

   }
