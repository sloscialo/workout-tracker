import { Component } from 'angular2/core';
import { RouteConfig, Router, RouterLink, ROUTER_PROVIDERS } from 'angular2/router';
import { WorkoutService } from './workout.service';
import { AuthenticationService } from './authentication.service';
import { WorkoutsComponent } from './workouts.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { ExerciseCatalog } from './exercise-catalog';
import { AuthenticatedRouterOutlet } from './authenticated-router-outlet';
import { User } from './workout-routine';
import * as Utils from './utilities';

@Component({
  selector: 'workout-tracker',
  templateUrl: 'views/main.html',
  directives:[AuthenticatedRouterOutlet, RouterLink], // ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    WorkoutService,
    AuthenticationService,
    ExerciseCatalog
  ]
})
@RouteConfig([
  { 
    path: "/",
    redirectTo: ['Dashboard'],
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: WorkoutsComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  }
])
export class AppComponent
{
  title = 'Workout Tracker';
  userName: string;
  
  constructor(private _authService: AuthenticationService, private _router: Router)
  {
    
  }  
      
  onLogout() 
  {
    this._authService.logout()
        .then(() => this._router.navigate(['Login']));
  }
  
  isLogoutDisabled(): boolean
  {
    return !Utils.isLoggedIn();
  }  
  
  getCurrentUser(): string
  {
    if (!Utils.isLoggedIn) { return "" }
    
    var u = sessionStorage.getItem(Utils.Constants.USER)
    if (u === null || u === undefined) { return "" }
     
    var user: User = User.deserialize(u);
    
    return user.toFullName();
  }
}