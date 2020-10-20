import { Member } from './../_models/member';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
