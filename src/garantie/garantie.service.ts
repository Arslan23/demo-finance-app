import { Injectable } from '@nestjs/common';
import { CreateGarantieDto } from './dto/create-garantie.dto';
import { UpdateGarantieDto } from './dto/update-garantie.dto';
import { Garantie } from './entities/garantie.entity';

@Injectable()
export class GarantieService {
  async create(createGarantieDto: CreateGarantieDto) {
    const garantie = Garantie.create(createGarantieDto);
    await garantie.save();
    return garantie;
   }
 
   async showById(id: number): Promise<Garantie>
     {
         const garantie = await this.findById(id);
         return garantie;
     }
 
  async findById(id: number) {
         return await Garantie.findOne(id);
  }


  async findAll(): Promise<Garantie[]> {
    const garantie = await Garantie.find();
    return garantie;
  }
 

  update(id: number, updateGarantieDto: UpdateGarantieDto) {
    return `This action updates a #${id} garantie`;
  }

  async remove(id: number) {
    const garantie =  await Garantie.findOne(id);
    garantie.isDeleted = true;
    return garantie.save();
  }
}
