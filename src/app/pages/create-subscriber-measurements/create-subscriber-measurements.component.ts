import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubscriberMeasurements} from "../../gym-api/SubscriberMeasurements";
import {SubscriberMeasurementService} from "../../gym-api/subscriberMeasurement.service";

@Component({
    selector: 'app-create-subscriber',
    templateUrl: './create-subscriber-measurements.component.html',
    styleUrls: ['./create-subscriber-measurements.component.css']
})
export class CreateSubscriberMeasurementsComponent implements OnInit {
    subscriberMeasurements: SubscriberMeasurements = new SubscriberMeasurements();

    constructor(private subscriberMeasurementService: SubscriberMeasurementService,
                private route: ActivatedRoute,
                public router: Router) {
    }


    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.subscriberMeasurements.subscriberId = params['subscriberId'];
            }
        )
    }

    save() {
        this.subscriberMeasurementService
            .createSubscriberMeasurement(this.subscriberMeasurements).subscribe(data => {
                console.log(data);
                this.subscriberMeasurements = new SubscriberMeasurements();
            },
            error => console.log(error));
    }

    onSubmit() {
        this.save();
        this.gotoList();
    }

    gotoList() {
        this.router.navigate(['/subscriber-measurement', {subscriberId: this.subscriberMeasurements.subscriberId}]);
    }

}
