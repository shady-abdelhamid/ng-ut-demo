import { BService } from "./b.service";
import { CService } from "./c.service";

class FakeBService {
  getValue() {
    return 'faked service value';
  }
}

describe('CService without Angular testing support', () => {
  let cService: CService;

  it('#getValue should return real value from the real service', () => {
    cService = new CService(new BService());
    expect(cService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    cService = new CService(new FakeBService() as BService);
    expect(cService.getValue()).toBe('faked service value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    cService = new CService(fake as BService);
    expect(cService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the BService
    const bServiceSpy =
      jasmine.createSpyObj('BService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    bServiceSpy.getValue.and.returnValue(stubValue);

    cService = new CService(bServiceSpy);

    expect(cService.getValue())
      .toBe(stubValue, 'service returned stub value');
    expect(bServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(bServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
});