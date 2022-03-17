import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProFileRepository } from './repository/profile.repository';
import { User } from './entity/user.entity';
import { Profile } from './entity/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      ProFileRepository,
      User,
      Profile,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
