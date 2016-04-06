import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthenticationService } from './authentication.service';
import { User } from "./workout-routine";

@Component({
    selector: "login",
    template: `
      <div class="col-sm-12 col-md-5">
        <label for="userName">User name:</label>
        <input type="text" class="form-control" id="userName" [(ngModel)]="userName" placeholder="User name" />
        
        <br/>
        
        <label for="userPassword">Password:</label>
        <input type="password" class="form-control" id="userPassword" [(ngModel)]="userPassword" placeholder="Password" />
        
        <hr/>
        <button type="button" class="btn btn-primary" (click)="login()">Login</button>
        
        <h2 *ngIf="token">{{token}}</h2>
        <h5 style="color: red" *ngIf="error">{{error}}</h5>
      </div>
    `
  })
  export class LoginComponent
  {
    userName: string;
    userPassword: string;
    error: string;
    
    constructor(private _authService: AuthenticationService, private _router: Router) 
    {
      
    }
    
    login()    
    {
      if (this.isInvalid(this.userName) || this.isInvalid(this.userPassword))
      {
        // Throw login error.
        this.setError("Must enter a user name and password.");
        return;
      }
      
      this.setError(null);
      
      this._authService.login(this.userName, this.userPassword)
                       .then(u => {
                         this._router.navigate(['Dashboard'])
                       })
                       .catch(e =>
                       {
                         this.setError("There was an error: " + e);
                       });
    }

    private setError(message: string)
    {
      this.error = message;
    }
    
    private isInvalid(o: any): boolean {
      return o === null || o === undefined;
    }
  }
