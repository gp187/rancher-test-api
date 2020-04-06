import { Controller, Get, Head } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  getPing(): string {
    return 'pong';
  }

  @Head('heart')
  getHeart(): string {
    return 'pong';
  }
}
