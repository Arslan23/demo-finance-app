import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClaimantService } from './claimant.service';
import { CreateClaimantDto } from './dto/create-claimant.dto';
import { UpdateClaimantDto } from './dto/update-claimant.dto';
import { Claimant } from './entities/claimant.entity';

@ApiTags('Claimant')
@Controller('claimant')
export class ClaimantController {
  constructor(private readonly claimantService: ClaimantService) {}

  @Post()
  @ApiOperation({summary: 'Create a claimant'})
  @ApiResponse({status: 401})
  create(@Body() createClaimantDto: CreateClaimantDto) {
    return this.claimantService.create(createClaimantDto);
  }

  @Get()
  findAll() {
    return this.claimantService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Show a demandeur'})
  @ApiResponse({
    status: 200, 
    description: 'Record found',
    type: Claimant
  })
  findOne(@Param('id') id: string) {
    return this.claimantService.showById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeurDto: UpdateClaimantDto) {
    return this.claimantService.update(+id, updateDemandeurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claimantService.remove(+id);
  }
}
