import { Directive, Attribute, ElementRef, DynamicComponentLoader, ComponentFactory } from 'angular2/core'; 
import { Router, RouterLink, RouterOutlet, ComponentInstruction } from 'angular2/router';
import * as Utils from './utilities';

@Directive({
  selector: 'router-outlet'
})
export class AuthenticatedRouterOutlet extends RouterOutlet
{
  private _publicRoutes: string[];
  private __parentRouter: Router;
  
  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr: string)
  {
    super(_elementRef, _loader, _parentRouter, nameAttr)
    
    this.__parentRouter = _parentRouter;
    this._publicRoutes = ['login'];
  } 

  activate(instruction: ComponentInstruction)
  {
    let urlPath = instruction.urlPath;
    if (Utils.isLoggedIn() || this._publicRoutes.findIndex(s => s == urlPath) >= 0)
    {
      // It's a public or user is authenticated.
      return super.activate(instruction);
    }
             
    this.__parentRouter.navigate(['Login']);
  }
}