import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLoanTypeDto } from './dto/create-loan-type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan-type.dto';
import { LoanType } from './entities/loan-type.entity';
import { LoanTypeService } from './loan-type.service';


@ApiTags('Loan Type')
@Controller('loan-type')
export class LoanTypeController {
  constructor(private readonly loantypeService: LoanTypeService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Create a loan type'})
  @ApiResponse({status: 201})
  create(@Body() createLoanTypeDto: CreateLoanTypeDto) {
    console.log(createLoanTypeDto);
    return this.loantypeService.create(createLoanTypeDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  findAll() {
    return this.loantypeService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Show a a type de prêt'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: LoanType
  })
  findOne(@Param('id') id: string) {
    return this.loantypeService.showById(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('api-key'))
  update(@Param('id') id: string, @Body() updateLoanTypeDto: UpdateLoanTypeDto) {
    return this.loantypeService.update(+id, updateLoanTypeDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  remove(@Param('id') id: string) {
    return this.loantypeService.remove(+id);
  }
}
