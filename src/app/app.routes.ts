import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'all-products', loadComponent: () => import('./layouts/pages/catalog/catalog.component').then(m => m.CatalogComponent) },
];
