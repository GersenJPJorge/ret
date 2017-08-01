import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

/* Login */
import { LoginComponent } from './login/login.component';

/* Menu */
import { MenuComponent } from './menu/menu.component';
import { CampoBuscaMenuComponent } from './menu/campo-busca-menu/campo-busca-menu.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';

/* Font Awesome */
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, /* Login */
    MenuComponent, /* Menu */
    CampoBuscaMenuComponent, /* Menu */
    FooterMenuComponent /* Menu */
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
