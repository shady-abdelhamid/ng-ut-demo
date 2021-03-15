import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { DService } from './d.service';
import { AService } from './a.service';

class mockHttp {}
class FakeBService {
  getValue() {
    return 'faked service value';
  }
}

describe('DService', () => {
  let service: DService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AService, useClass: FakeBService }
      ]
    });
    service = TestBed.inject(DService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
