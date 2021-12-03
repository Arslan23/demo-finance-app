import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles, Res, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName } from 'src/common/functions/editFilename';
import { CreateGuaranteeDto } from 'src/guarantee/dto/create-guarantee.dto';
import { CreateLoanClaimantRequestDto } from './dto/create-loan-request-claimant.dto';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import {  UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';
import { LoanRequestService } from './loan-request.service';


@ApiTags('Loan Request')
@Controller('loan-request')
export class LoanRequestController {
  constructor(private readonly loanRequestService: LoanRequestService) {}

 /* @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Create a loan request'})
  @ApiResponse({status: 401})
  create(@Body() createDemandePretDto: CreateLoanRequestDto) {
    return this.loanRequestService.create(createDemandePretDto);
  }*/


  @Post()
  @HttpCode(200)
  @UseGuards(AuthGuard('api-key'))
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'idcard1', maxCount: 1 },
    { name: 'idcard2', maxCount: 1 },
  ],
  {storage: diskStorage({destination: './files', filename: editFileName})}
  ))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({summary: 'Make a loan request'})
  @ApiResponse({status: 401})
  create(@UploadedFiles() files: { idcard1?: Express.Multer.File[], idcard2?: Express.Multer.File[]},@Body() createLoanRequestDto: CreateLoanRequestDto) {
    
     createLoanRequestDto.idcard1 = files.idcard1[0].path;
     createLoanRequestDto.filename1 = files.idcard1[0].originalname;
     createLoanRequestDto.idcard2 = files.idcard2[0].path;
     createLoanRequestDto.filename2 = files.idcard2[0].originalname;
     console.log(files);
    console.log(createLoanRequestDto);
    return this.loanRequestService.create(createLoanRequestDto);
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

  @Get(':doc')
  @UseGuards(AuthGuard('api-key'))
  seeUploadedFile(@Param('doc') doc, @Res() res) {
  return res.sendFile(doc, { root: './files' });
}
}
