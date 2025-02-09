import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../application/users.service';

@Controller({})
export class AdminsUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async get() {
    const data = await this.usersService.list();
    return { data };
  }
}
