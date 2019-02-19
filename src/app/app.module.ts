import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { TransformService } from './services/transform.service';

@NgModule({
  declarations: [
    AppComponent
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
    TransformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
