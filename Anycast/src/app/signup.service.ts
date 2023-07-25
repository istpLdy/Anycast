import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(memberData: any) {
    const url = "http://localhost:8080/signup"
    return this.http.post(url, memberData);
  }
}
