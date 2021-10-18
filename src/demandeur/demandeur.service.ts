import { Injectable } from '@nestjs/common';
import { CreateDemandeurDto } from './dto/create-demandeur.dto';
import { UpdateDemandeurDto } from './dto/update-demandeur.dto';

@Injectable()
export class DemandeurService {
  create(createDemandeurDto: CreateDemandeurDto) {
    return 'This action adds a new demandeur';
  }

  findAll() {
    return `This action returns all demandeur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeur`;
  }

  update(id: number, updateDemandeurDto: UpdateDemandeurDto) {
    return `This action updates a #${id} demandeur`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeur`;
  }
}
