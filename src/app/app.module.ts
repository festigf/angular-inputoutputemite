import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EsmaterialComponent } from './esmaterial/esmaterial.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCardModule ],
  declarations: [ AppComponent, HelloComponent, EsmaterialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
