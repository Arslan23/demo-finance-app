import { Injectable } from '@nestjs/common';
import { CreateTypeGarantieDto } from './dto/create-type-garantie.dto';
import { UpdateTypeGarantieDto } from './dto/update-type-garantie.dto';
import { TypeGarantie } from './entities/type-garantie.entity';

@Injectable()
export class TypeGarantieService {
    async create(createTypeGarantieDto: CreateTypeGarantieDto) {
    const typeGarantie = TypeGarantie.create(createTypeGarantieDto);
    await typeGarantie.save();
    return typeGarantie;
  }

  async findAll(): Promise<TypeGarantie[]> {
    const typeGarantie = await TypeGarantie.find();
    return typeGarantie;
  }

  async findOne(id: number) {
    return await TypeGarantie.findOne(id);
  }

  update(id: number, updateTypeGarantieDto: UpdateTypeGarantieDto) {
    return `This action updates a #${id} typeGarantie`;
  }

  async remove(id: number) {
    const typeGarantie =  await TypeGarantie.findOne(id);
    typeGarantie.isDeleted = true;
    return typeGarantie.save();
  }
}
