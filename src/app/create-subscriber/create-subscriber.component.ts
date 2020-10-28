import {SubscriberService} from '../subscriber.service';
import {Subscriber} from '../subscriber';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WebcamImage} from "ngx-webcam";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-create-subscriber',
  templateUrl: './create-subscriber.component.html',
  styleUrls: ['./create-subscriber.component.css']
})
export class CreateSubscriberComponent implements OnInit {
  public webcamImage: WebcamImage = null;
  subscriber: Subscriber = new Subscriber();
  submitted = false;
  private trigger: Subject<void> = new Subject<void>();

  constructor(private subscriberService: SubscriberService,
              private router: Router) {
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit() {
  }

  newSubscriber(): void {
    this.submitted = false;
    this.subscriber = new Subscriber();
  }

  save() {
    this.subscriberService
      .createSubscriber(this.subscriber).subscribe(data => {
        console.log(data)
        this.subscriber = new Subscriber();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    if (this.webcamImage != null) {
      this.subscriber.image=this.webcamImage.imageAsDataUrl;
      this.submitted = true;
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['/subscribers']);
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

}
