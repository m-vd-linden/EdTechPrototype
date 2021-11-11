import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CollectionOverviewComponent } from './collection-overview/collection-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    OverviewComponent,
    CollectionOverviewComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatButtonToggleModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
