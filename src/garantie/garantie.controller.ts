import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GarantieService } from './garantie.service';
import { CreateGarantieDto } from './dto/create-garantie.dto';
import { UpdateGarantieDto } from './dto/update-garantie.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Garantie } from './entities/garantie.entity';

@ApiTags('Garantie')
@Controller('garantie')
export class GarantieController {
  constructor(private readonly garantieService: GarantieService) {}

  @Post()
  @ApiOperation({summary: 'Create a garantie'})
  @ApiResponse({status: 401})
  create(@Body() createGarantieDto: CreateGarantieDto) {
    return this.garantieService.create(createGarantieDto);
  }

  @Get()
  findAll() {
    return this.garantieService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a garantite'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: Garantie
  })
  findOne(@Param('id') id: string) {
    return this.garantieService.showById(+id);
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
