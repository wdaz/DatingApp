import { map } from 'rxjs/operators';
import { Member } from './../_models/member';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.baseUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Array<Member>> {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Array<Member>>(this.baseUrl + 'users').pipe(
      map((members) => {
        this.members = members;
        return members;
      })
    );
  }

  getMember(username: string) {
    const member = this.members.find((x) => x.username === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  setMainPhoto(photoId: number) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
}
