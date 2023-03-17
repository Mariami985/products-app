import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolTipModule } from './directive/tool-tip.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { SubstringModule } from './pipe/substring.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
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
