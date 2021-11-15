import Strategy from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
    constructor(
        private readonly configService: ConfigService
    ) {
        super({ header: 'X-API-KEY', prefix: '' },
        true,
        async (apiKey, done) => {
            return this.validate(apiKey, done);
        });
    }

    public validate = (apiKey: string, done: (error: Error, data) => {}) => {
        if (this.configService.get<string>('API_KEY') === apiKey) {
            done(null, true);
        }
        done(new UnauthorizedException(), null);
    }
    
}