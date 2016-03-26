import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { WorkoutService } from './workout.service';
import { WorkoutsComponent } from './workouts.component';
import { DashboardComponent } from './dashboard.component';
import { ExerciseCatalog } from './exercise-catalog';

@Component({
  selector: 'workout-tracker',
  templateUrl: 'views/main.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    WorkoutService,
    ExerciseCatalog
  ]
})
@RouteConfig([
  {
    path: '/workouts',
    name: 'Workouts',
    component: WorkoutsComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Workout Tracker';
}