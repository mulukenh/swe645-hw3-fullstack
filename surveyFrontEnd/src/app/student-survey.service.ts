import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentSurveyService {

  //serviceUrl = "http://localhost:8080/surveyBackEnd/surveys";
  serviceUrl = "http://a2bb79d217d5d4e59b4ade6575f18bf7-509203104.us-east-2.elb.amazonaws.com:8080/surveyBackEnd/surveys";
  constructor(private http: HttpClient) { }

  /*
    *  Function that performs http POST call to the given REST service with provided data from client side
    *  It will add Student survey data in the database with values fetched from the field
    *  @param data
    */
   addStudentSurvey(data)
   {
       const headersData = new HttpHeaders({
           "Content-Type": "application/json"
       });
       return this.http.post(this.serviceUrl, JSON.stringify(data), {
           headers: headersData
        });
   }

   getAllStudentGnum()
   {
    const headersData = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(this.serviceUrl, {
        headers: headersData
    });
   }

   getStudentSurvey(id)
   {
    const headersData = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(this.serviceUrl+"/"+id, {
        headers: headersData
    }).pipe(map(
      (response: any) => {
          return response;  
      },              
    )).pipe(catchError (
      (error: any) => {
          return throwError(null);
      }
    ));
   }


}
