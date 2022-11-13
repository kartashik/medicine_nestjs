import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { User } from "../users/users.model";

//Я Саша

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  //авторизация
  @ApiOperation({summary: 'Авторизация'})
  @ApiResponse({status: 200, type: String})
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  //регистрация
  @ApiOperation({summary: 'Регистрация'})
  @ApiResponse({status: 200, type: String})
  @Post("/reg")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

}
