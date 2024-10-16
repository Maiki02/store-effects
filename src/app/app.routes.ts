import { Routes } from '@angular/router';
import { NpcsComponent } from './pages/npcs/npcs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'npcs', component: NpcsComponent},
];
