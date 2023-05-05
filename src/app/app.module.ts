import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './layout/error/error.component';
import { MainHeaderComponent } from './components/components/main-header/main-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent, 
    ErrorComponent, 
    MainHeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

