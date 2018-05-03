import { TestBed, inject } from '@angular/core/testing';

import { CkeditorConfigService } from './ckeditor-config.service';

describe('CkeditorConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CkeditorConfigService]
    });
  });

  it('should be created', inject([CkeditorConfigService], (service: CkeditorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
