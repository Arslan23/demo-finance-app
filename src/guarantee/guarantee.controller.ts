import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { UploadMultipleGuaranteeDto } from './dto/upload-multiple-guarantee.dto';
import { Guarantee } from './entities/guarantee.entity';
import { GuaranteeService } from './guarantee.service';
import {mkdirSync} from 'fs';
import { extname } from 'path';

const storage = diskStorage({
  destination: function (req, file, cb) {
    let path = process.env.GUARANTEE_TMP_PATH;
    mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname) )
  }
})

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

  @Post('uploads')
  @ApiOperation({summary: 'Upload multiple guarantee'})
  @ApiResponse({status: 401})
  @UseInterceptors(AnyFilesInterceptor({ storage: storage }))
  uploadMultipleGuarantee(@Body() body,
  @UploadedFiles() files: Array<Express.Multer.File>) {
    let data = []
    for(let i=0; i<files.length; i++) {
      let file = files[i];
      data.push([file.fieldname, file.path, file.filename]);
    }

    return data;
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
