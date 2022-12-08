import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { ProtocolsModule } from './protocol/protocols.module';
import { PatternsModule } from './patterns/patterns.module';
import { Patient } from "./patients/patients.model";
import { Protocol } from "./protocol/protocols.model";
import { Pattern } from "./patterns/patterns.model";


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Patient, Protocol, Pattern],
      autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    PatientsModule,
    ProtocolsModule,
    PatternsModule
  ]
})
export class AppModule {}