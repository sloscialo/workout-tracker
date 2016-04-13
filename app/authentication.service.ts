import { Injectable } from 'angular2/core';
import { USERS } from './mock-users';
import { User } from './workout-routine';
import { Constants, createHashCode } from './utilities';
import { Observable } from 'rxjs/rx';

@Injectable()
export class AuthenticationService
{
  user: User;
  
  login(userName: string, password: string): Promise<User>
  {
    // TODO: Replace with call to service.
    var user = USERS.find(u => u.passwordHash === createHashCode(password).toString(16));
    
    if (user === null || user === undefined)
    {
      return Promise.reject<User>("User not found, or password incorrect.");
    }
    
    return Promise.resolve(user);
  }
      
  logout(): Promise<boolean>
  {
    try
    {
      this.removeToken();
      return Promise.resolve(true);
    }
    catch(error)
    {
      return Promise.reject<boolean>("Could not log out: " + error.message);
    }
  }
  
  getToken()
  {
    return localStorage.getItem(Constants.TOKEN)
  }
  
  setToken(value: any)
  {
    localStorage.setItem(Constants.TOKEN, value);
  }
  
  removeToken()
  {
    localStorage.removeItem(Constants.TOKEN);
  }
  
  private createToken(user: User): string
  {
    var hash = Date.now();
    
    hash = (hash * 23) ^ createHashCode(user.userId);
    hash = (hash * 23) ^ createHashCode(user.firstName);
    hash = (hash * 23) ^ createHashCode(user.lastName);
    hash = (hash * 23) ^ createHashCode(user.passwordHash);
    
    return hash.toString(16);
  }
}