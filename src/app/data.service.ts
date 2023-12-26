import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Case } from './interfaces/Case';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/data';  // Update with your Flask server address

  constructor(private http: HttpClient) {}

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(`${this.apiUrl}/cases`);
  }

  postCase(newCase: Case): Observable<Case> {
    // console.log(newCase)
    return this.http.post<Case>(`${this.apiUrl}/cases`, newCase);
  }

  // deleteCase(caseId: string): Observable<any> {
  //   const deleteUrl = `${this.apiUrl}/cases`;
  //   return this.http.delete<string>(deleteUrl,);
  // }

  deleteCase(caseId: string): Observable<any> {
    const url = `${this.apiUrl}/cases`;  // Update the URL to match your Flask endpoint
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.delete(url, { headers, body: { case_id: caseId } });
  }

  getCaseDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/case-details`);
  }
}
