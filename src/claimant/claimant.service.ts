import { Injectable } from '@nestjs/common';
import { CreateClaimantDto } from './dto/create-claimant.dto';
import { UpdateClaimantDto } from './dto/update-claimant.dto';
import { Claimant } from './entities/claimant.entity';

@Injectable()
export class ClaimantService {
  async create(createClaimantDto: CreateClaimantDto) {
    const claimant = Claimant.create(createClaimantDto);
    await claimant.save();
    return claimant
   }
 
   async showById(id: number): Promise<Claimant>
     {
         const claimant = await this.findById(id);
         return claimant;
     }
 
     async findById(id: number) {
         return await Claimant.findOne(id);
    }

    async findAll(): Promise<Claimant[]> {
        const claimant = await Claimant.find();
        return claimant;
      }
 
 

  update(id: number, updateClaimantDto: UpdateClaimantDto) {
    return `This action updates a #${id} claimant`;
  }

  async remove(id: number) {
    const claimant =  await Claimant.findOne(id);
    claimant.isDeleted = true;
    return claimant.save()
  }
}
