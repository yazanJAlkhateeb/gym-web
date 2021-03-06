import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SubscribersListComponent} from '../../pages/subscribers-list/subscribers-list.component';
import {CreateSubscriberComponent} from '../../pages/create-subscriber/create-subscriber.component';
import {WebcamModule} from 'ngx-webcam';
import {SubscriptionCheckComponent} from '../../pages/subscription-check/subscription-check.component';
import {UpdateSubscriberComponent} from '../../pages/update-subscriber/update-subscriber.component';
import {SettingsComponent} from "../../pages/settings/settings.component";
import {CreateSubscriberMeasurementsComponent} from "../../pages/create-subscriber-measurements/create-subscriber-measurements.component";
import {SubscriberMeasurementComponent} from "../../pages/subscriber-measurement/subscriber-measurement.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        WebcamModule,
    ],
    declarations: [
        DashboardComponent,
        SubscribersListComponent,
        CreateSubscriberComponent,
        SubscriptionCheckComponent,
        UpdateSubscriberComponent,
        CreateSubscriberMeasurementsComponent,
        SubscriberMeasurementComponent,
        SettingsComponent,
        IconsComponent,
        TypographyComponent,
        NotificationsComponent,
        ]
})
export class AdminLayoutModule {
}
