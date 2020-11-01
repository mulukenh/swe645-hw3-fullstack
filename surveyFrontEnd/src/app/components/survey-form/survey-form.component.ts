import { SurveyData } from './../../models/survey-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SurveyListService } from 'src/app/services/survey-list.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: []
})
export class SurveyFormComponent implements OnInit {
  pageTitle:string = "Student Survey";
  likedAboutCampus:string[] = ["Students", "Location", "Campus", "Atmosphere", "Dorm rooms", "Sports"];
  interestsInCampus: string[] = ["Friends", "Television", "Internet", "Other"];
  surveyForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    contactInfo: this.formBuilder.group({
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      email: [''],
      phone: ['']
    }),
    date: [''],
    likedAboutCampus: this.formBuilder.array(this.likedAboutCampus.map(l => this.formBuilder.control(false))),
    interestsInCampus: [''],
    doRecommend: [''],
    raffle: [''],
    comments: ['']
  })

  constructor(private formBuilder: FormBuilder, private surveyListService: SurveyListService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var surveyData: SurveyData = this.surveyForm.value;
    surveyData.likedAboutCampus = this.likedAboutCampus.filter((x, index) =>
      this.surveyForm.value.likedAboutCampus[index] == true); 
    this.surveyListService.postSurvey(surveyData).subscribe(surveyData => {
      console.log(surveyData);
    });
  }
}
