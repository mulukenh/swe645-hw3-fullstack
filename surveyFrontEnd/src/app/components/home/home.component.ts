import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  greeting:string = "Welcome to George Mason University!";
  welcomeMessage:string = "We are excited to have you join us for a great adventure";
  suggestSurvey:string = "We value our students, please take a moment to take a survey regarding your experience";
  surveyButtonName: string = "Take Survey";

  constructor() { }

  ngOnInit(): void {
  }
}
