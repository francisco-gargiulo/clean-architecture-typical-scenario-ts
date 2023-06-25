class Repository implements RepositoryInterface {
  constructor(private database: DatabaseInterface<User>) {}

  getUser(id: string): User {
    return this.database.get(id);
  }

  createUser(user: User): void {
    this.database.create(user);
  }
}
