import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {Subscriber} from '../../gym-api/subscriber';
import {SubscriberService} from '../../gym-api/subscriber.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-create-subscriber',
    templateUrl: './create-subscriber.component.html',
    styleUrls: ['./create-subscriber.component.css']
})
export class CreateSubscriberComponent implements OnInit {
    public webcamImage: WebcamImage = null;
    subscriber: Subscriber = new Subscriber();
    private trigger: Subject<void> = new Subject<void>();

    constructor(private subscriberService: SubscriberService,
                private router: Router,
                private toastr: ToastrService) {
        this.webcamImage==null;
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    ngOnInit() {
    }

    newSubscriber(): void {
        this.subscriber = new Subscriber();
    }

    save() {
        this.subscriberService
            .createSubscriber(this.subscriber).subscribe(data => {
                console.log(data);
                this.subscriber = new Subscriber();
                this.gotoList();
            },
            error => console.log(error));
    }

    onSubmit() {
        if (this.webcamImage == null) {
            this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Please get Picture for the subscriber', '', {
                disableTimeOut: true,
                enableHtml: true,
                closeButton: true,
                toastClass: 'alert alert-info alert-with-icon',
                positionClass: 'toast-' + 'top' + '-' + 'center'
            });
        }
        this.subscriber.image = this.webcamImage.imageAsDataUrl;
        this.save();
        this.gotoList();
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
