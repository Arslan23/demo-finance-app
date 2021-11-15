import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Create a loan request'})
  @ApiResponse({status: 401})
  create(@Body() createDemandePretDto: CreateLoanRequestDto) {
    return this.loanRequestService.create(createDemandePretDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Get all demande prêt'})
  @ApiResponse({status: 200, description: 'Get all demande prêt'})
  findAll() {
    return this.loanRequestService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Show a demande prêt'})
  @ApiResponse({status: 200, description: 'Get demande prêt', type: LoanRequest})
  findOne(@Param('id') id: string) {
    return this.loanRequestService.showById(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('api-key'))
  update(@Param('id') id: string, @Body() updateDemandePretDto: UpdateLoanRequestDto) {
    return this.loanRequestService.update(+id, updateDemandePretDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  remove(@Param('id') id: string) {
    return this.loanRequestService.remove(+id);
  }
}
