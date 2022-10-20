import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainComponent } from './components/main/main.component';
 

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    MainComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
