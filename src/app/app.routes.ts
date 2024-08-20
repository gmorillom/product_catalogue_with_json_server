import { Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'catalogue', component: CatalogueComponent},
    {path: 'dashboard', component: DashboardComponent}
];
