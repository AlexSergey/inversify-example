import { inject, injectable } from 'inversify';
import { RepositoryInterface } from './repositories/repository.interface';
import { TYPES } from './di.types';

@injectable()
export class App {
  constructor(@inject(TYPES.repo) private repository: RepositoryInterface) {}
  init() {
    console.log(this.repository.getData());
  }
}
