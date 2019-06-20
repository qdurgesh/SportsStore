import { Injectable } from "@angular/core";
import { RouterStateSnapshot,ActivatedRouteSnapshot,Router } from '@angular/router';
import { StoreComponent } from './store.component';
@Injectable()
export class StoreFirstGurad {
  private firstNavigation =true;
  constructor(private router : Router)
  {


  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        if(this.firstNavigation){

            this.firstNavigation=false;
            if(route.component != StoreComponent)
            {
                this.router.navigateByUrl("/store");
                return false;
            }
        }
   
    return true;
  }


}

