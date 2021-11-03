import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuaranteeTypeService } from './guarantee-type.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGuaranteeTypeDto } from './dto/create-guarantee-type.dto';
import { UpdateGuaranteeTypeDto } from './dto/update-guarantee-type.dto';
import { GuaranteeType } from './entities/guarantee-type.entity';

@ApiTags('Guarantee Type')
@Controller('garantie-type')
export class GuarantieTypeController {
  constructor(private readonly guarantieTypeService: GuaranteeTypeService) {}

  @Post()
  @ApiOperation({summary: 'Create a guarantee type'})
  @ApiResponse({status: 401})
  create(@Body() createGuaranteeTypeDto: CreateGuaranteeTypeDto) {
    return this.guarantieTypeService.create(createGuaranteeTypeDto);
  }

  @Get()
  @ApiOperation({summary: 'Show all type garantie'})
  @ApiResponse({
    status: 200, 
    description: 'Show all type garantie',
  })
  findAll() {
    return this.guarantieTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show type garantie'})
  @ApiResponse({
    status: 200, 
    description: 'Show type garantie',
    type: GuaranteeType
  })
  findOne(@Param('id') id: string) {
    return this.guarantieTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuaranteeTypeDto: UpdateGuaranteeTypeDto) {
    return this.guarantieTypeService.update(+id, updateGuaranteeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guarantieTypeService.remove(+id);
  }
}
