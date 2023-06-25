class Controller {
  constructor(private interactor: InteractorInterface) {}

  getUser(id: string): void {
    const inputData: InputData = { id };

    this.interactor.executeGetUser(inputData);
  }

  createUser(id: string, username: string): void {
    const inputData: InputData = { id, username };

    this.interactor.executeCreateUser(inputData);
  }
}
