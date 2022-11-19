import { forwardRef, Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { PatternsController } from './patterns.controller';
import { Pattern } from './patterns.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PatternsService],
  controllers: [PatternsController],
  imports: [
    SequelizeModule.forFeature([Pattern]),
    forwardRef(() => AuthModule),
  ],
  exports: [
    PatternsService,
  ]
})
export class PatternsModule {}
