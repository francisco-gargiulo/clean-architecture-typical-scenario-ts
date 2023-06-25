class Database<T> implements DatabaseInterface<T> {
  private items: T[] = [];

  get(id: string): T {
    const item = this.items.find((item: any) => item.id === id);

    if (!item) {
      throw new Error("Item not found");
    }

    return item;
  }

  create(item: T): void {
    this.items.push(item);
  }
}
