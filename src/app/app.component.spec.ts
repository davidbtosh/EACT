import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatTreeModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,        
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,        
        MatIconModule,             
        MatTreeModule,
        MatButtonModule,
        MatToolbarModule
      ],
      providers: [
        DataService,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Solution to Energy Aust Code Test for David Mackintosh'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Solution to Energy Aust Code Test for David Mackintosh.');
  });

  it('should render title in a toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Solution to Energy Aust Code Test for David Mackintosh.');
  });
});
