import { SurveyListService } from './../../services/survey-list.service';
import { SurveyData } from './../../models/survey-data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: []
})
export class SurveyListComponent implements OnInit {
  surveyListTitle:string = "Survey List"
  surveyList: SurveyData[];

  constructor(private surveyListService: SurveyListService) { }

  ngOnInit(): void {
    this.surveyListService.getSurveyList().subscribe(surveyList => {
      this.surveyList = surveyList;
    });
  }
}
