import { Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [LandingPageComponent]
})
export class MainContentComponent {

}
