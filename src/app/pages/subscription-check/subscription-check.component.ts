import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscriber} from '../../gym-api/subscriber';
import {SubscriberService} from '../../gym-api/subscriber.service';

@Component({
    selector: 'app-subscription-check',
    templateUrl: './subscription-check.component.html',
    styleUrls: ['./subscription-check.component.css']
})
export class SubscriptionCheckComponent implements OnInit {

    id: number;
    subscriber: Subscriber;
    subscriberId: string = String();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private subscriberService: SubscriberService) {
    }

    ngOnInit() {
    }

    today(endOfSubscription: string) {
        return Date.parse(endOfSubscription) > Date.now();
    }

    paid(totalAmount: number, paidAmount: number) {
        return totalAmount - paidAmount;

    }

    onSubmit() {
        this.find();
        this.subscriberId = null;
    }

    find() {
        this.subscriberService
            .getSubscriberBySubscriberId(this.subscriberId).subscribe(data => {
                console.log(data);
                this.subscriber = data;
            },
            error => console.log(error));
    }

}
