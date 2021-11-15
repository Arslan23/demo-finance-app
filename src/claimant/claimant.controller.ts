import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({summary: 'Create a claimant'})
  @ApiResponse({status: 401})
  create(@Body() createClaimantDto: CreateClaimantDto) {
    return this.claimantService.create(createClaimantDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  findAll() {
    return this.claimantService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('api-key'))
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
  @UseGuards(AuthGuard('api-key'))
  update(@Param('id') id: string, @Body() updateDemandeurDto: UpdateClaimantDto) {
    return this.claimantService.update(+id, updateDemandeurDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  remove(@Param('id') id: string) {
    return this.claimantService.remove(+id);
  }
}
