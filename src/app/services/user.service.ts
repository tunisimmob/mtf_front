import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/loginRequest';

const API_URL = 'https://mtfback.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = 'https://mtfback.herokuapp.com/api/users';

  private usersbyrole = 'https://mtfback.herokuapp.com/api/userbyRoleid';

  private changerpassword = 'https://mtfback.herokuapp.com/api/auth/changepassword';


  constructor(private http: HttpClient) { }



  updateUser(user: any, id: any): Observable<Object> {
    return this.http.put(`${this.users}/${id}`, user);
    // return this.http.put(this.users, user, { observe: 'response' });

  }


  getuserbyid(id: any): Observable<any> {
    return this.http.get(`${this.users}/${id}`);
  }

  getuserbyroleid(id: any): Observable<any> {
    return this.http.get(`${this.usersbyrole}/${id}`);
  }



  getusersList(): Observable<any> {
    return this.http.get(this.users);
  }


  changepassword(loginreq: LoginRequest): Observable<any> { return this.http.post(`${this.changerpassword}`, loginreq); }

  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }




}
