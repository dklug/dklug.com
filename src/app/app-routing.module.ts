import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CssBenchComponent } from './css-bench/css-bench.component';
import { PeterComponent } from './peter/peter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cssbench', component: CssBenchComponent },
  { path: 'peter', component: PeterComponent },
  { path: 'peter/:youtubeLink', component: PeterComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
