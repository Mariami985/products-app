import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { HomeComponent } from './pages/product-page/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './pages/product-page/list/list.component';
import { MainListComponent } from './pages/product-page/list/main-list/main-list.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    MainHeaderComponent,
    HomeComponent,
    FooterComponent,
 
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

