
import { Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from "./auth.service";



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

