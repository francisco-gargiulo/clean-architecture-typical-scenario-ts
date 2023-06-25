class Presenter implements PresenterInterface {
  constructor(private viewModel: ViewModel) {}

  present(outputData: OutputData): void {
    this.viewModel.id = outputData.id;
    this.viewModel.username = outputData.username;
  }
}
