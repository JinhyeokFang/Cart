import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';

@Module({
  providers: [ItemService, ItemResolver],
})
export class ItemModule {}
