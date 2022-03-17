import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.createUser();
  }

  @Post()
  createUser() {
    return this.userService.getAllUsers();
  }
}
