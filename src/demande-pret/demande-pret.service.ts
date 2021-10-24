import { Injectable } from '@nestjs/common';
import { CreateDemandePretDto } from './dto/create-demande-pret.dto';
import { UpdateDemandePretDto } from './dto/update-demande-pret.dto';
import { DemandePret } from './entities/demande-pret.entity';

@Injectable()
export class DemandePretService {
    async create(createDemandePretDto: CreateDemandePretDto) {
    const demandePret = DemandePret.create(createDemandePretDto);
    await demandePret.save();
    return demandePret;
   }
 
   async showById(id: number): Promise<DemandePret>
     {
         const demandePret = await this.findById(id);
         return demandePret;
     }

 
    async findById(id: number) {
         return await DemandePret.findOne(id);
    }

    async findAll(): Promise<DemandePret[]> {
      const demandePret = await DemandePret.find();
      return demandePret;
    }


  update(id: number, updateDemandePretDto: UpdateDemandePretDto) {
    return `This action updates a #${id} demandePret`;
  }

  async remove(id: number) {
    const demandePret =  await DemandePret.findOne(id);
    demandePret.isDeleted = true;
    return demandePret.save()
  }
}
