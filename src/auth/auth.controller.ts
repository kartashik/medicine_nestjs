
import { Body, HttpStatus, Next, Post, Redirect,Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Render } from '@nestjs/common';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { User } from "../users/users.model";

//Я Саша
//У меня лучшие одногруппницы!!

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }
 
  //авторизация

  @Post("login")
  login(@Body() userDto: CreateUserDto) {
    try{
      var otv = this.authService.login(userDto);
      return otv 
    }
    catch(e){
      return e.message
    }
  }

  //регистрация
  /*@ApiOperation({summary: 'Регистрация'})
  @ApiResponse({status: 200, type: String})*/
  @Post("/reg")
  @UsePipes(ValidationPipe)
  registration(@Body() userDto: CreateUserDto) {
    try{
      var otv = this.authService.registration(userDto);
      return otv 
    }
    catch(e){
      return e.message
    }
  }

}
