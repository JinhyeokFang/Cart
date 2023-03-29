import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './models/item.model';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item)
  async item(@Args('id', { type: () => Int }) id: number) {
    //this.itemService.findOneById(id)
    return {};
  }
}
