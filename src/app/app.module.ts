import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolTipModule } from './directive/tool-tip.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/prod-list/products-list.component'
import { SubstringModule } from './pipe/substring.module';
import { AboutCompanyComponent } from './components/com-about/about-company/about-company.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AboutCompanyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubstringModule,
    ToolTipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
