import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTypeGarantieDto {
    @ApiProperty()
    @IsNotEmpty()
    type_garantie: string;

   }
