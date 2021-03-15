import { BService } from "./b.service";

describe('BService', () => {
  let service: BService;
  beforeEach(() => { service = new BService(); });

  describe('#getValue', () => {
    it('should return real value', () => {
      expect(service.getValue()).toBe('real value');
    });
  });
  
  // it('#getValue should return real value', () => {
  //   expect(service.getValue()).toBe('real value');
  // });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
});