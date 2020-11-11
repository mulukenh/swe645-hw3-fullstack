import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentSurveyService {

  serviceUrl = "http://localhost:8080/surveyBackEnd/surveys";

  constructor(private http: HttpClient) { }

  /*
    *  Function that performs http POST call to the given REST service with provided data from client side
    *  It will add Student survey data in the database with values fetched from the field
    *  @param data
    */
   addStudentSurvey(data) : Observable<any>
   {
       const headersData = new HttpHeaders({
           "Content-Type": "application/json"
       });
       return this.http.post(this.serviceUrl, JSON.stringify(data), {
           headers: headersData
        });
   }

   getAllStudentGnum() : Observable<any>
   {
    const headersData = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(this.serviceUrl, {
        headers: headersData
    });
   }

   getStudentSurvey(id): Observable<any>
   {
    const headersData = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(this.serviceUrl+"/"+id, {
        headers: headersData
    });
   }


}
