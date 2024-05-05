import { NgxClerkSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgxClerkSampleService;

  beforeEach(() => {
    sut = new NgxClerkSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
