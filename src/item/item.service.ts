import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  addItem() {
    return;
  }

  getItemsByName(name: string) {
    return [];
  }

  getItemsByUserId(userId: number) {
    return [];
  }
}
