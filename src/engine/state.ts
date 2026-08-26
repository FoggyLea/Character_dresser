import type { LayerSlot, Item } from '../types';

export class OutfitManager {
  private equipped = new Map<LayerSlot, Item[]>();

  private multiItemSlots: Set<LayerSlot> = new Set([
    'top_inner',
    'acc',
    'skin'
  ]);

  public toggleItem(item: Item): void {
    const slotItems = this.equipped.get(item.slot) || [];
    const existingIndex = slotItems.findIndex(i => i.id === item.id);

    // 1. ЕСЛИ ВЕЩЬ УЖЕ НАДЕТА
    if (existingIndex !== -1) {
      if (item.isRemovable === false) return;
      // Особенность для top_inner: переключение порядка перед снятием
      if (item.slot === 'top_inner' && slotItems.length > 1) {
        // Если вещь лежит в самом верху стопки слоя -> снимаем
        if (existingIndex === slotItems.length - 1) {
          slotItems.splice(existingIndex, 1);
        } else {
          // Если она снизу -> перемещаем её НАВЕРХ стопки этого слота
          slotItems.splice(existingIndex, 1);
          slotItems.push(item);
        }
      } else {
        // Для обычных вещей — просто снимаем
        slotItems.splice(existingIndex, 1);
      }

      if (slotItems.length === 0) {
        this.equipped.delete(item.slot);
      } else {
        this.equipped.set(item.slot, slotItems);
      }
      return;
    }

    // 2. ЕСЛИ ВЕЩЬ ЕЩЁ НЕ НАДЕТА
    if (this.multiItemSlots.has(item.slot)) {
      slotItems.push(item);
      this.equipped.set(item.slot, slotItems);
    } else {
      this.equipped.set(item.slot, [item]);
    }
  }

  public isEquipped(itemId: string): boolean {
    return this.getEquippedItems().some(item => item.id === itemId);
  }

  public getEquippedItems(): Item[] {
    const allItems: Item[] = [];
    this.equipped.forEach(items => allItems.push(...items));
    return allItems;
  }

  public clear(): void {
    this.equipped.clear();
  }
}