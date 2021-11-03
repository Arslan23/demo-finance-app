import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { Guarantee } from './entities/guarantee.entity';
import { GuaranteeService } from './guarantee.service';

@ApiTags('Guarantee')
@Controller('guarantee')
export class GuaranteeController {
  constructor(private readonly guarantieService: GuaranteeService) {}

  @Post()
  @ApiOperation({summary: 'Create a guarantie'})
  @ApiResponse({status: 401})
  create(@Body() createGuaranteeDto: CreateGuaranteeDto) {
    return this.guarantieService.create(createGuaranteeDto);
  }

  @Get()
  findAll() {
    return this.guarantieService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a garantite'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: Guarantee
  })
  findOne(@Param('id') id: string) {
    return this.guarantieService.showById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuaranteeDto: UpdateGuaranteeDto) {
    return this.guarantieService.update(+id, updateGuaranteeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guarantieService.remove(+id);
  }
}
