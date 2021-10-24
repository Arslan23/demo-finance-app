import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DemandeurService } from './demandeur.service';
import { CreateDemandeurDto } from './dto/create-demandeur.dto';
import { UpdateDemandeurDto } from './dto/update-demandeur.dto';
import { Demandeur } from './entities/demandeur.entity';

@ApiTags('Demandeur')
@Controller('demandeur')
export class DemandeurController {
  constructor(private readonly demandeurService: DemandeurService) {}

  @Post()
  @ApiOperation({summary: 'Create a demandeur'})
  @ApiResponse({status: 401})
  create(@Body() createDemandeurDto: CreateDemandeurDto) {
    return this.demandeurService.create(createDemandeurDto);
  }

  @Get()
  findAll() {
    return this.demandeurService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a demandeur'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: Demandeur
  })
  findOne(@Param('id') id: string) {
    return this.demandeurService.showById(+id);
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
