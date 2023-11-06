import { SetMetadata } from '@nestjs/common';

export const CustomDecorator = (...args: string[]) => {
  return SetMetadata('aaa', args);
};
