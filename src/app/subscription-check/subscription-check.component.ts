import {Subscriber} from '../subscriber';
import {Component, OnInit} from '@angular/core';
import {SubscriberService} from '../subscriber.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  onSubmit() {
    this.find();
  }

  find() {
    this.subscriberService
      .getSubscriberBySubscriberId(this.subscriberId).subscribe(data => {
        console.log(data)
        this.subscriber = data;
      },
      error => console.log(error));
  }

}
