import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // we can use status codes like this in nestjs. POST method return 201 by default
    // @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signup(@Body() dto: AuthDto){
        return this.authService.signup(dto);
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
}