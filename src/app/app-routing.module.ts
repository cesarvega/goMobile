import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';


const routes: Routes = [
  {
    path: "",
    component: HomePgComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
