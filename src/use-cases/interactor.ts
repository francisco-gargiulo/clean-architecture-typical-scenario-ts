class Interactor implements InteractorInterface {
  constructor(private userRepository: RepositoryInterface, private presenter: PresenterInterface) {}

  executeGetUser(inputData: InputData): void {
    if (!inputData.id) {
      throw new Error("id is required");
    }

    const user = this.userRepository.getUser(inputData.id);

    const outputData = {
      id: user.id,
      username: user.username,
    };

    this.presenter.present(outputData);
  }

  executeCreateUser(inputData: InputData): void {
    if (!inputData.id) {
      throw new Error("id is required");
    }

    if (!inputData.password) {
      throw new Error("password is required");
    }

    if (!inputData.username) {
      throw new Error("username is required");
    }

    const user = new User(inputData.id, inputData.username, inputData.password);

    this.userRepository.createUser(user);

    const outputData: OutputData = {
      id: user.id,
      username: user.username,
    };

    this.presenter.present(outputData);
  }
}
