import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entity/profile.entity';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.userRepo.find({
      relations: ['profile'],
    });
  }

  async createUser() {
    const profile = new Profile();
    profile.id = 1;
    profile.gender = 'M';
    profile.photo = 'ss';

    console.log(this.userRepo);

    // const profile = this.profileRepo.create({
    //   id: 1,
    //   gender: 'M',
    //   photo: 'ss',
    // });
    // console.log(profile);

    return this.userRepo.find();
  }
}
