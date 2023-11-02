import { SetMetadata } from '@nestjs/common';

export const Aaa = (...args: string[]) => {
  return SetMetadata('aaa', args);
};
