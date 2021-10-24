import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeGarantieService } from './type-garantie.service';
import { CreateTypeGarantieDto } from './dto/create-type-garantie.dto';
import { UpdateTypeGarantieDto } from './dto/update-type-garantie.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TypeGarantie } from './entities/type-garantie.entity';

@ApiTags('Type de garantie')
@Controller('type-garantie')
export class TypeGarantieController {
  constructor(private readonly typeGarantieService: TypeGarantieService) {}

  @Post()
  @ApiOperation({summary: 'Create a type garantie'})
  @ApiResponse({status: 401})
  create(@Body() createTypeGarantieDto: CreateTypeGarantieDto) {
    return this.typeGarantieService.create(createTypeGarantieDto);
  }

  @Get()
  @ApiOperation({summary: 'Show all type garantie'})
  @ApiResponse({
    status: 200, 
    description: 'Show all type garantie',
  })
  findAll() {
    return this.typeGarantieService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show type garantie'})
  @ApiResponse({
    status: 200, 
    description: 'Show type garantie',
    type: TypeGarantie
  })
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
