import {
  applyDecorators,
  Get,
  UseGuards,
  createParamDecorator,
  ExecutionContext,
  Controller,
  SetMetadata,
} from '@nestjs/common';
import { CustomDecorator } from '../custom.decorator';
import { CustomGuard } from '../custom.guard';

export function Bbb(path, role) {
  return applyDecorators(
    Get(path),
    CustomDecorator(role),
    UseGuards(CustomGuard),
  );
}

export const Ccc = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('Ccc: ', data, ctx);
    return 'ccc';
  },
);

export const Ddd = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('ddd', metadata));
};
