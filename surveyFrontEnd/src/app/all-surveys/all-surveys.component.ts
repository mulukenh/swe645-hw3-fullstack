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
      let surveydata = response
      if(Array.isArray(surveydata.survey) == false)
      {
        this.studentSurveyData = surveydata.survey;
        this.gnumArr.push(this.studentSurveyData.survey.contactInfo.id);
      }
      else{
        this.studentSurveyData = surveydata.survey[0];
        for (let i = 0; i < surveydata.survey.length; i++) {
          this.gnumArr.push(surveydata.survey[i].id);
        }
        //this.gnumArr[0] = this.studentSurveyData.survey.contactInfo.id;
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
  getStudentSurveyData(gnum: String) {
    this.service.getStudentSurvey(gnum).subscribe(
      (response: any) => {
        //alert("Received");
        this.studentSurveyData = response;
      },
      (error: any) => {
        console.log("Error");
        this.studentSurveyData = null;
      }
    );

  }

}
