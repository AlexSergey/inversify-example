import { RepositoryInterface } from './repository.interface';
import { injectable } from 'inversify';

@injectable()
export class RealDataRepository implements RepositoryInterface {
  getData(): string[] {
    return [
      'real repo 1',
      'real repo 2'
    ]
  }
}
