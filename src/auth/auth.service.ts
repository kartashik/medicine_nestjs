import { Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import { User } from "../users/users.model";
import {PASSWORD} from "../config"

@Injectable()
export class AuthService {
  constructor() {
  }


  async check(password: string) {
    const hashPassword = await bcrypt.hash(PASSWORD, 5);
    const passwordEquals = await bcrypt.compare(password, hashPassword);
    if (passwordEquals){
      return true;
    }
    throw new Error("Неверный пароль")
  }

}
