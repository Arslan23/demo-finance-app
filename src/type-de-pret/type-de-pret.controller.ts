import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeDePretService } from './type-de-pret.service';
import { CreateTypeDePretDto } from './dto/create-type-de-pret.dto';
import { UpdateTypeDePretDto } from './dto/update-type-de-pret.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TypeDePret } from './entities/type-de-pret.entity';

@ApiTags('Type de prêt')
@Controller('type-de-pret')
export class TypeDePretController {
  constructor(private readonly typeDePretService: TypeDePretService) {}

  @Post()
  @ApiOperation({summary: 'Create a type de prêt'})
  @ApiResponse({status: 401})
  create(@Body() createTypeDePretDto: CreateTypeDePretDto) {
    return this.typeDePretService.create(createTypeDePretDto);
  }

  @Get()
  findAll() {
    return this.typeDePretService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a a type de prêt'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: TypeDePret
  })
  findOne(@Param('id') id: string) {
    return this.typeDePretService.showById(+id);
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
