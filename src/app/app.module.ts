//import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material/material-module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EsmaterialComponent } from './esmaterial/esmaterial.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ],
  declarations: [ AppComponent, HelloComponent, EsmaterialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
