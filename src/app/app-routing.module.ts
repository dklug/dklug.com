import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CssBenchComponent } from './css-bench/css-bench.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cssbench', component: CssBenchComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
