import {
  Get,
  Next,
  SetMetadata,
  UseGuards,
  // UseInterceptors,
} from '@nestjs/common';
import { CustomDecorator } from './custom.decorator';
import { AppService } from './app.service';
import { CustomGuard } from './custom.guard';
import { Bbb, Ccc, Ddd } from './utils/decorators';
// import { CustomInterceptor } from './custom.interceptor';

@Ddd('', 'mistyu')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(CustomGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Hello2')
  // @UseInterceptors(CustomInterceptor)
  @CustomDecorator('admin')
  @UseGuards(CustomGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('Hello3', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('Hello4')
  getHello4(@Next() next, @Ccc() c) {
    next();
    return c;
  }
}
