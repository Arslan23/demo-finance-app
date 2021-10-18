import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeDePretService } from './type-de-pret.service';
import { CreateTypeDePretDto } from './dto/create-type-de-pret.dto';
import { UpdateTypeDePretDto } from './dto/update-type-de-pret.dto';

@Controller('type-de-pret')
export class TypeDePretController {
  constructor(private readonly typeDePretService: TypeDePretService) {}

  @Post()
  create(@Body() createTypeDePretDto: CreateTypeDePretDto) {
    return this.typeDePretService.create(createTypeDePretDto);
  }

  @Get()
  findAll() {
    return this.typeDePretService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeDePretService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDePretDto: UpdateTypeDePretDto) {
    return this.typeDePretService.update(+id, updateTypeDePretDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeDePretService.remove(+id);
  }
}
