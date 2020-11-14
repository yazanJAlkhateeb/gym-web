import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscriber} from '../../gym-api/subscriber';
import {SubscriberService} from '../../gym-api/subscriber.service';
import {WebcamImage} from "ngx-webcam";
import {Observable, Subject} from "rxjs";

@Component({
    selector: 'app-update-subscriber',
    templateUrl: './update-subscriber.component.html',
    styleUrls: ['./update-subscriber.component.css']
})
export class UpdateSubscriberComponent implements OnInit {
    public webcamImage: WebcamImage = null;
    private trigger: Subject<void> = new Subject<void>();
    id: number;
    subscriber: Subscriber;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private subscriberService: SubscriberService) {
    }

    ngOnInit() {
        this.subscriber = new Subscriber();

        this.id = this.route.snapshot.params.id;

        this.subscriberService.getSubscriber(this.id)
            .subscribe(data => {
                console.log(data);
                this.subscriber = data;
            }, error => console.log(error));
    }
    triggerSnapshot(): void {
        this.trigger.next();
    }
    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
    handleImage(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
    }
    updateSubscriber() {
        if (this.webcamImage!=null){
            this.subscriber.image = this.webcamImage.imageAsDataUrl;
        }
        this.subscriberService.updateSubscriber(this.id, this.subscriber)
            .subscribe(data => {
                console.log(data);
                this.subscriber = new Subscriber();
                this.gotoList();
            }, error => console.log(error));
    }

    onSubmit() {
        this.updateSubscriber();
    }

    gotoList() {
        this.router.navigate(['/subscribers']);
    }
}
