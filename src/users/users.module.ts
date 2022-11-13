import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from "./users.model";
import { AuthModule } from "../auth/auth.module";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => AuthModule),
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {
}
