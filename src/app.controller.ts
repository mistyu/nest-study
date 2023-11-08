import {
  Get,
  Inject,
  Next,
  SetMetadata,
  UseGuards,
  // UseInterceptors,
} from '@nestjs/common';
import { CustomDecorator } from './custom.decorator';
import { AppService } from './app.service';
import { CustomGuard } from './custom.guard';
import { Bbb, Ccc, Ddd } from './utils/decorators';
import { WINSTON_LOGGER_TOKEN } from './winston/winston.module';
// import { CustomInterceptor } from './custom.interceptor';

@Ddd('', 'mistyu')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(WINSTON_LOGGER_TOKEN)
  private logger;

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
    this.logger.log('Hello2', AppController.name);
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
