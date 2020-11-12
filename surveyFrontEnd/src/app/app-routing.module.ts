import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';

//Module that holds all the routing parameters with the paths and mapped components for navigation
const routes: Routes = [
  { path: '', component: StudentSurveyComponent},
  { path: 'allsurvey', component: AllSurveysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
