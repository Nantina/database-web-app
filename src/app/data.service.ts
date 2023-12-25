import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    console.log(newCase)
    return this.http.post<Case>(`${this.apiUrl}/cases`, newCase);
  }
}
