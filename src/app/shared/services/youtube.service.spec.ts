import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';
import { HttpClientModule } from '@angular/common/http';

describe('YoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [YoutubeService]
  }));

  it('should be created', () => {
    const service: YoutubeService = TestBed.get(YoutubeService);
    expect(service).toBeTruthy();
  });
});
