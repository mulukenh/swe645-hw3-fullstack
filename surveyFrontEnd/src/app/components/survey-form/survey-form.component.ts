import { ContactInfo } from './../../models/contact-info';
import { SurveyData } from './../../models/survey-data';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: []
})
export class SurveyFormComponent implements OnInit {
  pageTitle:string = "Student Survey";
  surveyData: SurveyData;
  contactInfo: ContactInfo;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
  }
}
