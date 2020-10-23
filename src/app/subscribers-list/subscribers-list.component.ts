import { SubscriberDetailsComponent } from './../subscriber-details/subscriber-details.component';
import { Observable } from "rxjs";
import { SubscriberService} from "./../subscriber.service";
import { Subscriber } from "./../subscriber";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-subscriber-list",
  templateUrl: "./subscribers-list.component.html",
  styleUrls: ["./subscribers-list.component.css"]
})
export class SubscribersListComponent implements OnInit {
  subscribers: Observable<Subscriber[]>;

  constructor(private subscriberService: SubscriberService,
    private router: Router) {}

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

  subscriberDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSubscriber(id: number){
    this.router.navigate(['update', id]);
  }
}
