import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 1, name: '山田一郎' },
      { id: 2, name: '山田二郎' },
      { id: 3, name: '山田三郎' },
      { id: 4, name: '山田四郎' },
      { id: 5, name: '山田五郎' },
      { id: 6, name: '山田六郎' },
      { id: 7, name: '山田七郎' },
      { id: 8, name: '山田八郎' },
      { id: 9, name: '山田九郎' },
      { id: 10, name: '山田十郎' }
    ];
    return { members };
  }
}
