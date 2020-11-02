import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapComponent} from '../../pages/map/map.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {SubscribersListComponent} from '../../pages/subscribers-list/subscribers-list.component';
import {CreateSubscriberComponent} from '../../pages/create-subscriber/create-subscriber.component';
import {UpdateSubscriberComponent} from '../../pages/update-subscriber/update-subscriber.component';
import {SubscriptionCheckComponent} from '../../pages/subscription-check/subscription-check.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'subscribers', component: SubscribersListComponent},
    {path: 'add-subscriber', component: CreateSubscriberComponent},
    {path: 'update-subscriber', component: UpdateSubscriberComponent},
    {path: 'check-subscriber', component: SubscriptionCheckComponent},
    {path: 'typography', component: TypographyComponent},
    // { path: "rtl", component: RtlComponent }
];
