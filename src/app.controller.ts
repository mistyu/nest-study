import { Get, SetMetadata, UseGuards } from '@nestjs/common';
import { Aaa } from './custom.decorator';
import { AppService } from './app.service';
import { AaaGuard } from './custom.guard';
import { Bbb, Ccc, Ddd } from './utils/decorators';

@Ddd('fff', 'mistyu')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Hello2')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('Hello3', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('Hello4')
  getHello4(@Ccc() c) {
    return c;
  }
}
