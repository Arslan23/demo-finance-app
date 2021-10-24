import { Injectable } from '@nestjs/common';
import { CreateDemandeurDto } from './dto/create-demandeur.dto';
import { UpdateDemandeurDto } from './dto/update-demandeur.dto';
import { Demandeur } from './entities/demandeur.entity';

@Injectable()
export class DemandeurService {
  async create(createDemandeurDto: CreateDemandeurDto) {
    const demandeur = Demandeur.create(createDemandeurDto);
    await demandeur.save();
    return demandeur
   }
 
   async showById(id: number): Promise<Demandeur>
     {
         const demandeur = await this.findById(id);
         return demandeur;
     }
 
     async findById(id: number) {
         return await Demandeur.findOne(id);
    }

    async findAll(): Promise<Demandeur[]> {
        const demandeur = await Demandeur.find();
        return demandeur;
      }
 
 

  update(id: number, updateDemandeurDto: UpdateDemandeurDto) {
    return `This action updates a #${id} demandeur`;
  }

  async remove(id: number) {
    const demandeur =  await Demandeur.findOne(id);
    demandeur.isDeleted = true;
    return demandeur.save()
  }
}
