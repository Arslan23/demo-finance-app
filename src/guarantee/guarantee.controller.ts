import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName } from 'src/common/functions/editFilename';
import { Document } from 'src/document/entities/document.entity';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { Guarantee } from './entities/guarantee.entity';
import { GuaranteeService } from './guarantee.service';

@ApiTags('Guarantee')
@Controller('guarantee')
export class GuaranteeController {
  constructor(private readonly guarantieService: GuaranteeService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @UseInterceptors(
    FilesInterceptor('docs', 20, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      })
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiOperation({summary: 'Create a guarantee'})
  @ApiResponse({status: 401})
  create(@UploadedFiles() docs: Array<Express.Multer.File>,@Body() createGuaranteeDto: CreateGuaranteeDto) {
    console.log(docs);
    for(let i = 0; i <= docs.length; i++)
    {
      let doc: Document;
      doc.fileUrl = docs[i].path;
      doc.filename = docs[i].filename
      createGuaranteeDto.documents.push(doc);
    }
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
