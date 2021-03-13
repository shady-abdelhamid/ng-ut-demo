import { AService } from './a.service';

describe('AService', () => {
  let service = new AService();;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum of arguments', () => {
    // arrange
    const num1 = 1;
    const num2 = 1;
    // act
    const result = service.sum(1,1);
    // assert
    expect(result).toBe(2);
  });
  
});
