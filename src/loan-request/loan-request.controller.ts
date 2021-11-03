import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import {  UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';
import { LoanRequestService } from './loan-request.service';


@ApiTags('Loan Request')
@Controller('loan-request')
export class LoanRequestController {
  constructor(private readonly loanRequestService: LoanRequestService) {}

  @Post()
  @ApiOperation({summary: 'Create a loan request'})
  @ApiResponse({status: 401})
  create(@Body() createDemandePretDto: CreateLoanRequestDto) {
    return this.loanRequestService.create(createDemandePretDto);
  }

  @Get()
  @ApiOperation({summary: 'Get all demande prêt'})
  @ApiResponse({status: 200, description: 'Get all demande prêt'})
  findAll() {
    return this.loanRequestService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a demande prêt'})
  @ApiResponse({status: 200, description: 'Get demande prêt', type: LoanRequest})
  findOne(@Param('id') id: string) {
    return this.loanRequestService.showById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandePretDto: UpdateLoanRequestDto) {
    return this.loanRequestService.update(+id, updateDemandePretDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanRequestService.remove(+id);
  }
}
