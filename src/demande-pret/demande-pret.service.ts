import { Injectable } from '@nestjs/common';
import { CreateDemandePretDto } from './dto/create-demande-pret.dto';
import { UpdateDemandePretDto } from './dto/update-demande-pret.dto';

@Injectable()
export class DemandePretService {
  create(createDemandePretDto: CreateDemandePretDto) {
    return 'This action adds a new demandePret';
  }

  findAll() {
    return `This action returns all demandePret`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandePret`;
  }

  update(id: number, updateDemandePretDto: UpdateDemandePretDto) {
    return `This action updates a #${id} demandePret`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandePret`;
  }
}
