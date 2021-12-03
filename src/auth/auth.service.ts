import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
    //KEYS
    private  apiKeys: string[] = ['SgVkYp3s6v9y$B&E)H@McQeThWmZq4t7','NdRgUkXp2s5v8x/A?D(G+KbPeShVmYq3'];
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async login(authLoginDto: AuthLoginDto)
    {
       const user = await this.validateUser(authLoginDto);
       const payload = {userId:  user.id,};

       return { access_token: this.jwtService.sign(payload)};
    }


    async validateUser(authLoginDto: AuthLoginDto): Promise<User>
    {
        const {email, password} = authLoginDto;
        const user = await this.userService.findByEmail(email);
        if(!(await user?.validatePassword(password)))
        {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        return user;

    }

    validateApiKey(apiKey: string)
    {
        console.log("Api key");
        console.log(apiKey);
        return this.apiKeys.find(apiK => apiKey === apiK);  
    }
}




