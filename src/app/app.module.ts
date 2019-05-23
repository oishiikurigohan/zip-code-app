import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { ApiAccessService } from './service/api-access.service';

@NgModule({
  declarations: [
    AppComponent,
    ZipCodeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
