import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentSurveyService } from '../student-survey.service';
@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  gnumArr = [];
  studentSurveyData = null;
  liked = "";

  constructor(private http: HttpClientModule, private service: StudentSurveyService) { }

  ngOnInit(): void {
    this.service.getAllStudentGnum().subscribe(
      (response: any) => {
      //Store the response in array
      console.log(response)
      if(Array.isArray(response) == false)
      {
        this.studentSurveyData = response;
        this.gnumArr[0] = this.studentSurveyData.survey.contactInfo.id;
      }
      else{
        this.studentSurveyData = response[0];
        this.gnumArr[0] = this.studentSurveyData.survey.contactInfo.id;
      }
      },
      (error: any) => {
        console.log("Error");
        console.log(error);
      }
    );
  }

  /**
   * Function to fetch survey data of the student with provided gnumber based on click event
   * @param event is the click event that has all the values of the event
   * @param gnum is the gnumber value fetched from ngModel
   */
  getStudentSurveyData(event, gnum: String) {
    this.service.getStudentSurvey(gnum).subscribe(
      (response: any) => {
      this.studentSurveyData = response;
      },
      (error: any) => {
        console.log("Error");
        this.studentSurveyData = null;
      }
    );

  }

}
