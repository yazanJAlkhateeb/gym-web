import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {SubscriberMeasurements} from "../../gym-api/SubscriberMeasurements";
import {SubscriberMeasurementService} from "../../gym-api/subscriberMeasurement.service";
import {SubscriberService} from "../../gym-api/subscriber.service";
import {Subscriber} from "../../gym-api/subscriber";

@Component({
    selector: 'app-subscription-check',
    templateUrl: './subscriber-measurement.component.html',
    styleUrls: ['./subscriber-measurement.component.css']
})
export class SubscriberMeasurementComponent implements OnInit {
    subscriberMeasurements: Observable<SubscriberMeasurements[]>;
    id: number;
    subscriberId: string;
    subscriber: Subscriber = new Subscriber()

    constructor(private route: ActivatedRoute,
                private router: Router,
                private subscriberMeasurementService: SubscriberMeasurementService,
                private subscribersService: SubscriberService) {
    }

    ngOnInit() {
        this.subscriber=null;
        this.route.params.subscribe(
            params => {
                this.subscriberId = params['subscriberId'];
            });
        if (this.subscriberId != null)
            this.find(this.subscriberId)
    }

    today(endOfSubscription: string) {
        return Date.parse(endOfSubscription) > Date.now();

    }


    find(subscriberId: string) {
        this.subscriber = null;
        this.subscriberMeasurements = null;
        this.subscribersService.getSubscriberBySubscriberId(subscriberId).subscribe(data => this.subscriber = data);
        this.subscriberMeasurementService.getSubscribersMeasurements(subscriberId).subscribe(data => this.subscriberMeasurements = data);
        // this.subscriberId=null;
    }

    newRecord(subscriberId: string) {
        this.router.navigate(['/add-subscriber-measurement', {subscriberId: subscriberId}]);
    }
}
