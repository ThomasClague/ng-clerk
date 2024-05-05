import { NgClerkSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgClerkSampleService;

  beforeEach(() => {
    sut = new NgClerkSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
