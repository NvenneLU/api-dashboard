import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'api-dashboard';
  onDashboard: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if(event.urlAfterRedirects != "/dashboard") {
          this.onDashboard = false;
        } else {
          this.onDashboard = true;
        }
        console.log(this.onDashboard);
      }
    })
  }
}
