import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandePretService } from './demande-pret.service';
import { CreateDemandePretDto } from './dto/create-demande-pret.dto';
import { UpdateDemandePretDto } from './dto/update-demande-pret.dto';

@Controller('demande-pret')
export class DemandePretController {
  constructor(private readonly demandePretService: DemandePretService) {}

  @Post()
  create(@Body() createDemandePretDto: CreateDemandePretDto) {
    return this.demandePretService.create(createDemandePretDto);
  }

  @Get()
  findAll() {
    return this.demandePretService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandePretService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandePretDto: UpdateDemandePretDto) {
    return this.demandePretService.update(+id, updateDemandePretDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandePretService.remove(+id);
  }
}
