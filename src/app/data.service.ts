import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { Case, Clue, Policeman, Suspect, Victim, Witness } from './interfaces/Data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/data';  // Update with your Flask server address

  constructor(private http: HttpClient) {}

  // Cases requests

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(`${this.apiUrl}/cases`);
  }

  postCase(newCase: Case): Observable<Case> {
    return this.http.post<Case>(`${this.apiUrl}/cases`, newCase);
  }

  deleteCase(caseId: string): Observable<any> {
    const url = `${this.apiUrl}/cases`;  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers, body: { case_id: caseId } });
  }

  // Case Details Request 

  getCaseDetails(case_id: string): Observable<any> {
    const url = `${this.apiUrl}/case-details`;
    const params = new HttpParams().set('case_id', case_id);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.get<any>(url, { headers: headers, params: params });
  }

  // Clues requests

  getClues(): Observable<Clue[]> {
    return this.http.get<Clue[]>(`${this.apiUrl}/clues`);
  }

  postClue(newClue: Clue): Observable<Clue> {
    return this.http.post<Clue>(`${this.apiUrl}/clues`, newClue);
  }

  deleteClue(clueId: string): Observable<any> {
    const url = `${this.apiUrl}/clues`;  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers, body: { clue_id: clueId } });
  }

  // Policemen requests

  getSuspects(): Observable<Suspect[]> {
    return this.http.get<Suspect[]>(`${this.apiUrl}/suspects`);
  }

  postSuspect(newSuspect: Suspect): Observable<Suspect> {
    return this.http.post<Suspect>(`${this.apiUrl}/suspects`, newSuspect);
  }

  deleteSuspect(suspectId: string): Observable<any> {
    const url = `${this.apiUrl}/suspects`;  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers, body: { suspect_id: suspectId } });
  }

  // Policeman requests

  getPolicemen(): Observable<Policeman[]> {
    return this.http.get<Policeman[]>(`${this.apiUrl}/policemen`);
  }

  postPoliceman(newPoliceman: Policeman): Observable<Policeman> {
    return this.http.post<Policeman>(`${this.apiUrl}/policemen`, newPoliceman);
  }

  deletePoliceman(policemanId: string): Observable<any> {
    const url = `${this.apiUrl}/policemen`;  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers, body: { policeman_id: policemanId } });
  }

  // Victim requests

  getVictims(): Observable<Victim[]> {
    return this.http.get<Victim[]>(`${this.apiUrl}/victims`);
  }

  postVictim(newVictim: Victim): Observable<Victim> {
    return this.http.post<Victim>(`${this.apiUrl}/victims`, newVictim);
  }

  deleteVictim(victimId: string): Observable<any> {
    const url = `${this.apiUrl}/victims`;  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers, body: { victim_id: victimId } });
  }

    // Witness requests

    getWitnesses(): Observable<Witness[]> {
      return this.http.get<Witness[]>(`${this.apiUrl}/witnesses`);
    }
  
    postWitness(newWitness: Witness): Observable<Witness> {
      return this.http.post<Witness>(`${this.apiUrl}/witnesses`, newWitness);
    }
  
    deleteWitness(witnessId: string): Observable<any> {
      const url = `${this.apiUrl}/witnesses`;  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.delete(url, { headers, body: { witness_id: witnessId } });
    }
}
