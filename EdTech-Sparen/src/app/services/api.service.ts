import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Feedback } from '../models/app-models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly ROOT_URL = 'http://localhost:15000/api';

  constructor(private http: HttpClient) { }

  getFeedbackByStudentId(studentId: string): Observable<any[]> {
    return this.http.get<any[]>(this.ROOT_URL + '/feedback/list/' + studentId);
  }

}
