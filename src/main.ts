const database = new Database<User>();

const repository = new Repository(database);

const viewModel: ViewModel = {};

const presenter = new Presenter(viewModel);
const interactor = new Interactor(repository, presenter);

const controller = new Controller(interactor);

// execution
controller.getUser("1"); // This will throw an error because there is
