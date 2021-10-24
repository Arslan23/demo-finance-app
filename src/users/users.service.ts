import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';


@Injectable()
export class UsersService {
  constructor(){}

  async create(createUserDto: CreateUserDto) {
   const user = User.create(createUserDto);
   await user.save();
   delete user.password ;
   return user
  }

  async showById(id: number): Promise<User>
    {
        const user = await this.findById(id);

        delete user.password;

        return user;
    }

    async findById(id: number) {
        return await User.findOne(id);
      }

      async findAll(): Promise<User[]> {
        const user = await User.find();
        return user;
      }


      
  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async remove(id: number) {
    const user =  await User.findOne(id);
    user.isDeleted = true;
    return user.save();
  }
}
