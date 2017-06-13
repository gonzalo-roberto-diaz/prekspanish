declare let ga: Function;
import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {AnalyticsService} from "./services/analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    constructor(public router: Router, public googleAnalyticsEventsService: AnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
  submitEvent() {
    this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }
}
