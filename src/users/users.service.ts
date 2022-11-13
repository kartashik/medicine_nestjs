import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

//Работа с таблицой users
@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getUser(id: number) {
    return await this.userRepository.findByPk(id);
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
    return user;
  }
}
