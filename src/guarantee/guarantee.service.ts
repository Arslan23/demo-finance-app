import { Injectable } from '@nestjs/common';
import { Document } from 'src/document/entities/document.entity';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { Guarantee } from './entities/guarantee.entity';


@Injectable()
export class GuaranteeService {
  async create(createGarantieDto: CreateGuaranteeDto) {
    const docs: Document[] = createGarantieDto.documents;
    delete createGarantieDto.documents;
    const guarantee = await Guarantee.create(createGarantieDto).save();
    for(let i = 0; i<= docs.length; i++)
    {
      docs[i].guarantee = guarantee;
      docs[i] = await Document.create(docs[i]).save();
    }
    
    
    return {guarantee, docs};
   }
 
   async showById(id: number): Promise<Guarantee>
     {
         const guarantee = await this.findById(id);
         return guarantee;
     }
 
  async findById(id: number) {
         return await Guarantee.findOne(id);
  }


  async findAll(): Promise<Guarantee[]> {
    const guarantee = await Guarantee.find();
    return guarantee;
  }
 

  update(id: number, updateGarantieDto: UpdateGuaranteeDto) {
    return `This action updates a #${id} guarantee`;
  }

  async remove(id: number) {
    const guarantee =  await Guarantee.findOne(id);
    guarantee.isDeleted = true;
    return guarantee.save();
  }
}
