import { forwardRef, Module } from '@nestjs/common';
import { ProtocolsService } from './protocols.service';
import { ProtocolsController } from './protocols.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Protocol } from './protocols.model';

@Module({
  providers: [ProtocolsService],
  controllers: [ProtocolsController],
  imports: [
    SequelizeModule.forFeature([Protocol]),
    forwardRef(() => AuthModule),
  ],
  exports: [
    ProtocolsService,
  ]
})
export class ProtocolsModule {}
