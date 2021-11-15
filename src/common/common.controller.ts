import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { municipality } from '../common/municipality';


@ApiTags('Common')
@Controller('common')
export class CommonController {
  constructor() {}

@Get('municipality')
  @ApiOperation({summary: 'List of Benin municipality'})
  @ApiResponse({
    status: 200, 
    description: 'Show list of municipality of Benin',
  })
  getMunicipality() {
      return municipality;
  }

}