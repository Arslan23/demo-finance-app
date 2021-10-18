import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeGarantieService } from './type-garantie.service';
import { CreateTypeGarantieDto } from './dto/create-type-garantie.dto';
import { UpdateTypeGarantieDto } from './dto/update-type-garantie.dto';

@Controller('type-garantie')
export class TypeGarantieController {
  constructor(private readonly typeGarantieService: TypeGarantieService) {}

  @Post()
  create(@Body() createTypeGarantieDto: CreateTypeGarantieDto) {
    return this.typeGarantieService.create(createTypeGarantieDto);
  }

  @Get()
  findAll() {
    return this.typeGarantieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeGarantieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeGarantieDto: UpdateTypeGarantieDto) {
    return this.typeGarantieService.update(+id, updateTypeGarantieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeGarantieService.remove(+id);
  }
}
