import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {SubscribersListComponent} from '../../pages/subscribers-list/subscribers-list.component';
import {CreateSubscriberComponent} from '../../pages/create-subscriber/create-subscriber.component';
import {UpdateSubscriberComponent} from '../../pages/update-subscriber/update-subscriber.component';
import {SubscriptionCheckComponent} from '../../pages/subscription-check/subscription-check.component';
import {SettingsComponent} from "../../pages/settings/settings.component";
import {SubscriberMeasurementComponent} from "../../pages/subscriber-measurement/subscriber-measurement.component";
import {CreateSubscriberMeasurementsComponent} from "../../pages/create-subscriber-measurements/create-subscriber-measurements.component";

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'subscribers', component: SubscribersListComponent},
    {path: 'add-subscriber', component: CreateSubscriberComponent},
    {path: 'update-subscriber', component: UpdateSubscriberComponent},
    {path: 'check-subscriber', component: SubscriptionCheckComponent},
    {path: 'subscriber-measurement', component: SubscriberMeasurementComponent},
    {path: 'add-subscriber-measurement', component: CreateSubscriberMeasurementsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'typography', component: TypographyComponent},
];
