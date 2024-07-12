import { ElementRef } from '@angular/core';
import { ImgBrokenTwoDirective } from './img-broken-two.directive';

describe('ImgBrokenTwoDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenTwoDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
