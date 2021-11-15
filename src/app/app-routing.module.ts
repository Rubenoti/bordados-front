import { ContactoComponent } from './contacto/contacto.component';
import { ConocemeComponent } from './conoceme/conoceme.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'conoceme', component: ConocemeComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
