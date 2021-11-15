import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  @UseGuards(AuthGuard('api-key'))
  findAll() {
    return this.guarantieService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('api-key'))
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
  @UseGuards(AuthGuard('api-key'))
  update(@Param('id') id: string, @Body() updateGuaranteeDto: UpdateGuaranteeDto) {
    return this.guarantieService.update(+id, updateGuaranteeDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  remove(@Param('id') id: string) {
    return this.guarantieService.remove(+id);
  }
}
