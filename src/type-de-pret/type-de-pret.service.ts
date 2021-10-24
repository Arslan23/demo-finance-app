import { Injectable } from '@nestjs/common';
import { CreateTypeDePretDto } from './dto/create-type-de-pret.dto';
import { UpdateTypeDePretDto } from './dto/update-type-de-pret.dto';
import { TypeDePret } from './entities/type-de-pret.entity';

@Injectable()
export class TypeDePretService {
  async create(createTypeDePretDto: CreateTypeDePretDto) {
    const typeDePret = TypeDePret.create(createTypeDePretDto);
    await typeDePret.save();
    return typeDePret
   }
 
  async showById(id: number): Promise<TypeDePret>
     {
         const typeDePret = await this.findById(id);
         return typeDePret;
     }
 
  async findById(id: number) {
         return await TypeDePret.findOne(id);
       }

  async findAll(): Promise<TypeDePret[]> {
        const typeDePret = await TypeDePret.find();
        return typeDePret;
      }
 

  update(id: number, updateTypeDePretDto: UpdateTypeDePretDto) {
    return `This action updates a #${id} typeDePret`;
  }

 async remove(id: number) {
    const typeDePret =  await TypeDePret.findOne(id);
    typeDePret.isDeleted = true;
    return typeDePret.save();
  }
}
