import { HomeComponent } from './components/home/home.component';
import { SurveyDetailComponent } from './components/survey-detail/survey-detail.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
  { path: 'survey-detail', component: SurveyDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
