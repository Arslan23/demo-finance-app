import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentService {
  async create(createDocumentDto: CreateDocumentDto) {
    const document = Document.create(createDocumentDto);
    await document.save();
    return document;
   }
 
  async showById(id: number): Promise<Document>
     {
         const document = await this.findById(id);
         return document;
     }
 
  async findById(id: number) {
         return await Document.findOne(id);
  }

  async findAll(): Promise<Document[]> {
    const document = await Document.find();
    return document;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  async remove(id: number) {
    const document =  await Document.findOne(id);
    document.isDeleted = true;
    return document.save();
  }

}
