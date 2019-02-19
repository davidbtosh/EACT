import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { CarShow } from '../interfaces/car-show';
import { of } from 'rxjs';

describe('DataService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let service: DataService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [     
        HttpClientModule      
      ],
      providers: [      
        HttpClientModule
      ]    
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataService(<any> httpClientSpy);

  });

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('should return expected car shows (HttpClient called once)', () => {
    const expectedData: CarShow[] =
      [{ name: 'Melb Show', cars: [] }, { name: 'Syd Show', cars: [] }];
   
    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getCars().subscribe(
      carShows => expect(carShows).toEqual(expectedData, 'expected Car show data'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
