import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './inc/not-found/not-found.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cv', component: CvComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
