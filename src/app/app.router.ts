
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";

const   APP_ROUTES: Routes = [
    // Home Page Routes
    {path: '', component: LandingComponent, pathMatch: 'full'},

];

export const AppRouter = RouterModule.forRoot(APP_ROUTES);
