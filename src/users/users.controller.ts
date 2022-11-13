import { Body, Controller, Get, Post, Query, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags("Пользователи")
@Controller('users')
export class UsersController {
  constructor(private  usersService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @UsePipes(ValidationPipe)
  @Post('create')
  create(@Body() userDto: CreateUserDto ){
    return this.usersService.createUser(userDto)
  }

  @ApiOperation({summary: 'Получение пользователя'})
  @ApiResponse({status: 200, type: User})
  @ApiQuery({name: "id", type: Number, required:true, description: "id пользователя"})
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getUser(@Query() query: {id:number}){
    return this.usersService.getUser(query.id)

  }


}
