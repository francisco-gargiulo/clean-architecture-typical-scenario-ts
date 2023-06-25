interface DatabaseInterface<T> {
  get(id: string): T;
  create(item: T): void;
}
