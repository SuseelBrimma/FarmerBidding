import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }
  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }
  isAuthenticated1(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }
  canAccess() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
  canAccess1() {
    if (!this.isAuthenticated1()) {
      this.router.navigate(['/userlogin']);
    }
  }
  canAuthenticate() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }
  canAuthenticate1() {
    if (this.isAuthenticated1()) {
      this.router.navigate(['/dashboard1']);
    }
  }
  register(name: string, email: string, password: string) {
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5rxmG53rme-Fnsc8oY4TnOXiagCCUfiU',
        { displayName: name, email, password }
      );
  }
  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  login(email: string, password: string) {
    return this.http
      .post<{ idToken: string }>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5rxmG53rme-Fnsc8oY4TnOXiagCCUfiU',
        { email, password }
      );
  }
  detail() {
    let token = sessionStorage.getItem('token');
    return this.http.post<{ users: Array<{ localId: string, displayName: string }> }>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC5rxmG53rme-Fnsc8oY4TnOXiagCCUfiU',
      { idToken: token }
    );
  }
  removeToken() {
    sessionStorage.removeItem('token');
  }
  
}
