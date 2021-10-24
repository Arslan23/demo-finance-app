import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({summary: 'Create a user'})
  @ApiResponse({status: 401})
  create(@Body() createUserDto: CreateUserDto)
  {
    return this.usersService.create(createUserDto);
  }


  @Get(':id')
  @ApiOperation({summary: 'Show a user'})
  @ApiResponse({
    status: 200, 
    description: 'The found record',
    type: User
  })
  show(@Param('id') id: string)
  {
    return this.usersService.showById(+id);
  }

  @Get()
  @ApiOperation({summary: 'Show all users'})
  @ApiResponse({
    status: 200, 
    description: 'Display records',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  @ApiOperation({summary: 'Remove a user'})
  @ApiResponse({
    status: 200, 
    description: 'The user deleted with success',
    type: User
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
