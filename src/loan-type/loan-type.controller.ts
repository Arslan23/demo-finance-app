import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  @ApiOperation({summary: 'Create a loan type'})
  @ApiResponse({status: 401})
  create(@Body() createLoanTypeDto: CreateLoanTypeDto) {
    return this.loantypeService.create(createLoanTypeDto);
  }

  @Get()
  findAll() {
    return this.loantypeService.findAll();
  }

  @Get(':id')
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
  update(@Param('id') id: string, @Body() updateLoanTypeDto: UpdateLoanTypeDto) {
    return this.loantypeService.update(+id, updateLoanTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loantypeService.remove(+id);
  }
}
