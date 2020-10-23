import {SubscriberDetailsComponent} from './subscriber-details/subscriber-details.component';
import {CreateSubscriberComponent} from './create-subscriber/create-subscriber.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscribersListComponent} from './subscribers-list/subscribers-list.component';
import {UpdateSubscriberComponent} from './update-subscriber/update-subscriber.component';
import {SubscriptionCheckComponent} from "./subscription-check/subscription-check.component";

const routes: Routes = [
  {path: '', redirectTo: 'subscriber', pathMatch: 'full'},
  {path: 'subscribers', component: SubscribersListComponent},
  {path: 'add', component: CreateSubscriberComponent},
  {path: 'update/:id', component: UpdateSubscriberComponent},
  {path: 'details/:id', component: SubscriberDetailsComponent},
  {path: 'check', component: SubscriptionCheckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
