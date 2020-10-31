import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SurveyData } from '../models/survey-data';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SurveyListService {
  surveyListUrl:string = "assets/survey-data.json";

  constructor(private http: HttpClient) { }

  getSurveyList() : Observable<SurveyData[]> {
    return this.http.get<SurveyData[]>(this.surveyListUrl);
  }

  postSurvey(surveyData: SurveyData) {
    this.http.post(this.surveyListUrl, surveyData, httpOptions);
  }
}
