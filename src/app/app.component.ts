import {Component, Inject, LOCALE_ID} from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "gym-web-angular";
    languageList = [
        {code: 'en-US', label: 'English'},
        {code: 'ar', label: 'Arabic'},
    ];

    constructor(@Inject(LOCALE_ID) protected localeId: string) {
    }
}
