import { RepositoryInterface } from './repository.interface';
import { injectable } from 'inversify';

@injectable()
export class MockDataRepository implements RepositoryInterface {
  getData(): string[] {
    return [
      'mock repo 1',
      'mock repo 2'
    ]
  }
}
