import {RouterModule,Routes} from "@angular/router";
import {ModuleWithProviders} from '@angular/core';

import {SearchComponent} from "./component/search/search.component";
import {AboutComponent} from "./component/about/about.component";



 const routes:Routes=[
 {path:"",component:SearchComponent},
 {path:"about",component:AboutComponent},
 {path:"search",component:SearchComponent}

 
]
export const appRouting:ModuleWithProviders=RouterModule.forRoot(routes);
export const RoutingComponent=

[
 SearchComponent,
 AboutComponent
]
