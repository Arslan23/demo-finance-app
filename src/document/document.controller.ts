import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';


@ApiTags('Document')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Create a document'})
  @ApiResponse({status: 401})
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Show a document'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: Document
  })
  findOne(@Param('id') id: string) {
    return this.documentService.showById(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('api-key'))
  update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.update(+id, updateDocumentDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  remove(@Param('id') id: string) {
    return this.documentService.remove(+id);
  }
}
