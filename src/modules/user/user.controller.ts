import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAll();
  }

  @Get('ranking')
  @UseGuards(AuthGuard('jwt'))
  ranking() {
    return this.userService.retrieveUsersByTotalScore();
  }

  @Delete('')
  @UseGuards(AuthGuard('jwt'))
  deleteUser(@Body() deleteUserDto: DeleteUserDTO) {
    return this.userService.deleteUser(deleteUserDto);
  }
}