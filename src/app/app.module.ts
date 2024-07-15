import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { HideImgDirective } from './hide-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    MyBookingComponent,
    HideImgDirective
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
