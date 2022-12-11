
import { Body, HttpStatus, Next,Bind, Post, Redirect,Response, UsePipes, ValidationPipe, Request, UseGuards, Req, Res, Param, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Render } from '@nestjs/common';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { User } from "../users/users.model";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';



//Я Саша
//У меня лучшие одногруппницы!!
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }


  
  @Post("check")
  check(@Query('pass') pass: string) {
      var otv = this.authService.check(pass);
      return otv
    
  }

}

