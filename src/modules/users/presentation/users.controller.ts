import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../application/users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async list() {
    console.log(this);
    return this.usersService.list();
  }
}
