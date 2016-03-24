import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {WorkoutService} from './workout.service';
import {WorkoutsComponent} from './workouts.component';
import {Observable} from 'rxjs/rx';

@Component({
  selector: 'workout-tracker',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Workouts']">Workouts</a>
    
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    WorkoutService
  ]
})
@RouteConfig([
  {
    path: '/workouts',
    name: 'Workouts',
    component: WorkoutsComponent
  }
])
export class AppComponent {
  title = 'Workout Tracker';
}