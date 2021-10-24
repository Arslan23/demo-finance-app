import { IsNotEmpty } from "class-validator";

export class CreateDocumentDto {
    
    @IsNotEmpty()
    path: string;

    @IsNotEmpty()
    filename: string;

    @IsNotEmpty()
    fileUrl: string;

}
