import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscriber} from '../../gym-api/subscriber';
import {SubscriberService} from '../../gym-api/subscriber.service';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {
  subscribers: Observable<Subscriber[]>;

  constructor(private subscriberService: SubscriberService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.subscribers = this.subscriberService.getSubscribersList();
  }

  deleteSubscriber(id: number) {
    this.subscriberService.deleteSubscriber(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  today(endOfSubscription: string) {
    return Date.parse(endOfSubscription)> Date.now();

  }

  subscriberDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateSubscriber(id: number) {
    this.router.navigate(['update', id]);
  }
}
