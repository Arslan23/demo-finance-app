import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDocumentDto {
    
    @ApiProperty()
    @IsNotEmpty()
    path: string;

    @ApiProperty()
    @IsNotEmpty()
    filename: string;

    @ApiProperty()
    @IsNotEmpty()
    fileUrl: string;

}
