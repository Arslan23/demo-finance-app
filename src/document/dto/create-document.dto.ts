import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Guarantee } from "src/guarantee/entities/guarantee.entity";

export class CreateDocumentDto {
    
    @ApiProperty()
    path: string;

    @ApiProperty()
    filename: string;

    @ApiProperty()
    fileUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    guarantee: Guarantee;
}
