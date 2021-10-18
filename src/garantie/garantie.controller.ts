import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GarantieService } from './garantie.service';
import { CreateGarantieDto } from './dto/create-garantie.dto';
import { UpdateGarantieDto } from './dto/update-garantie.dto';

@Controller('garantie')
export class GarantieController {
  constructor(private readonly garantieService: GarantieService) {}

  @Post()
  create(@Body() createGarantieDto: CreateGarantieDto) {
    return this.garantieService.create(createGarantieDto);
  }

  @Get()
  findAll() {
    return this.garantieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.garantieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGarantieDto: UpdateGarantieDto) {
    return this.garantieService.update(+id, updateGarantieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.garantieService.remove(+id);
  }
}
