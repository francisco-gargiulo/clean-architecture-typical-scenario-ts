const ViewModel: ViewModel = {};

const presenter = new Presenter(ViewModel);

const database = new Database<User>();
const repository = new Repository(database);

const interactor = new Interactor(repository, presenter);

const controller = new Controller(interactor);

// execution
controller.getUser("1"); // This will throw an error because there is
