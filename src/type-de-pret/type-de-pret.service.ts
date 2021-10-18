import { Injectable } from '@nestjs/common';
import { CreateTypeDePretDto } from './dto/create-type-de-pret.dto';
import { UpdateTypeDePretDto } from './dto/update-type-de-pret.dto';

@Injectable()
export class TypeDePretService {
  create(createTypeDePretDto: CreateTypeDePretDto) {
    return 'This action adds a new typeDePret';
  }

  findAll() {
    return `This action returns all typeDePret`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeDePret`;
  }

  update(id: number, updateTypeDePretDto: UpdateTypeDePretDto) {
    return `This action updates a #${id} typeDePret`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeDePret`;
  }
}
