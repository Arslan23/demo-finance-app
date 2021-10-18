import { Injectable } from '@nestjs/common';
import { CreateGarantieDto } from './dto/create-garantie.dto';
import { UpdateGarantieDto } from './dto/update-garantie.dto';

@Injectable()
export class GarantieService {
  create(createGarantieDto: CreateGarantieDto) {
    return 'This action adds a new garantie';
  }

  findAll() {
    return `This action returns all garantie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} garantie`;
  }

  update(id: number, updateGarantieDto: UpdateGarantieDto) {
    return `This action updates a #${id} garantie`;
  }

  remove(id: number) {
    return `This action removes a #${id} garantie`;
  }
}
