import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DemandePretService } from './demande-pret.service';
import { CreateDemandePretDto } from './dto/create-demande-pret.dto';
import { UpdateDemandePretDto } from './dto/update-demande-pret.dto';
import { DemandePret } from './entities/demande-pret.entity';


@ApiTags('Demande Prêt')
@Controller('demande-pret')
export class DemandePretController {
  constructor(private readonly demandePretService: DemandePretService) {}

  @Post()
  @ApiOperation({summary: 'Create a demande prêt'})
  @ApiResponse({status: 401})
  create(@Body() createDemandePretDto: CreateDemandePretDto) {
    return this.demandePretService.create(createDemandePretDto);
  }

  @Get()
  @ApiOperation({summary: 'Get all demande prêt'})
  @ApiResponse({status: 200, description: 'Get all demande prêt'})
  findAll() {
    return this.demandePretService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a demande prêt'})
  @ApiResponse({status: 200, description: 'Get demande prêt', type: DemandePret})
  findOne(@Param('id') id: string) {
    return this.demandePretService.showById(+id);
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
