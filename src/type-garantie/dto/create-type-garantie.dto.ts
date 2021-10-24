import { IsNotEmpty } from "class-validator";

export class CreateTypeGarantieDto {
    @IsNotEmpty()
    type_garantie: string;

   }
