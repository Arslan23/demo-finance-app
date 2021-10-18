import { Injectable } from '@nestjs/common';
import { CreateTypeGarantieDto } from './dto/create-type-garantie.dto';
import { UpdateTypeGarantieDto } from './dto/update-type-garantie.dto';

@Injectable()
export class TypeGarantieService {
  create(createTypeGarantieDto: CreateTypeGarantieDto) {
    return 'This action adds a new typeGarantie';
  }

  findAll() {
    return `This action returns all typeGarantie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeGarantie`;
  }

  update(id: number, updateTypeGarantieDto: UpdateTypeGarantieDto) {
    return `This action updates a #${id} typeGarantie`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeGarantie`;
  }
}
