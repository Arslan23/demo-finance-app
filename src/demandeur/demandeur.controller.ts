import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeurService } from './demandeur.service';
import { CreateDemandeurDto } from './dto/create-demandeur.dto';
import { UpdateDemandeurDto } from './dto/update-demandeur.dto';

@Controller('demandeur')
export class DemandeurController {
  constructor(private readonly demandeurService: DemandeurService) {}

  @Post()
  create(@Body() createDemandeurDto: CreateDemandeurDto) {
    return this.demandeurService.create(createDemandeurDto);
  }

  @Get()
  findAll() {
    return this.demandeurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeurDto: UpdateDemandeurDto) {
    return this.demandeurService.update(+id, updateDemandeurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeurService.remove(+id);
  }
}
