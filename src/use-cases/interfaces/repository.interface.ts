interface RepositoryInterface {
  getUser(id: string): User;
  createUser(user: User): void;
}
