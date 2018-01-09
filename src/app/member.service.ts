import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';

@Injectable()
export class MemberService {
  membersUrl = 'api/members';

  private headers = new Headers({ 'ContentType': 'application/json'});

  constructor(private http: Http) {}

  getMembers(): Promise<Member[]> {
    return this.http.get(this.membersUrl)
      .toPromise()
      .then(response => response.json().data as Member[])
      .catch(this.handleError);
  }

  getMember(id: number): Promise<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Member)
      .catch(this.handleError);
  }

  update(member: Member): Promise<Member> {
    const url = `${this.membersUrl}/${member.id}`;
    return this.http.put(url, JSON.stringify(member), { headers: this.headers })
      .toPromise()
      .then(() => member)
      .catch(this.handleError);
  }

  create(name: string): Promise<Member> {
    return this.http.post(this.membersUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as Member)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('エラー', error);
    return Promise.reject(error.message || error);
  }
}
