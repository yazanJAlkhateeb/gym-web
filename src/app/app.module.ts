import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateSubscriberComponent} from './create-subscriber/create-subscriber.component';
import {SubscriberDetailsComponent} from './subscriber-details/subscriber-details.component';
import {SubscribersListComponent} from './subscribers-list/subscribers-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UpdateSubscriberComponent} from './update-subscriber/update-subscriber.component';
import {SubscriptionCheckComponent} from "./subscription-check/subscription-check.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from "ngx-webcam";

@NgModule({
  declarations: [
    AppComponent,
    CreateSubscriberComponent,
    SubscriberDetailsComponent,
    SubscribersListComponent,
    UpdateSubscriberComponent,
    SubscriptionCheckComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
