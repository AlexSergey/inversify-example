import { Container } from 'inversify';
import { App } from './app';
import { RepositoryInterface } from './repositories/repository.interface';
import { MockDataRepository } from './repositories/mock-data.repository';
import { RealDataRepository } from './repositories/real-data.repository';
import { TYPES } from './di.types';

export class DiContainer {
  public diContainer: Container;

  public configure(mock?: boolean) {
    this.diContainer = new Container();

    if (mock) {
      this.configureMockRepositories();
    } else {
      this.configureRepositories();
    }

    this.diContainer.bind(App).toSelf().inSingletonScope();
  }

  public configureMockRepositories() {
    this.diContainer.bind<RepositoryInterface>(TYPES.repo)
      .to(MockDataRepository)
      .inSingletonScope();
  }

  public configureRepositories() {
    this.diContainer.bind<RepositoryInterface>(TYPES.repo)
      .to(RealDataRepository)
      .inSingletonScope();
  }
}
