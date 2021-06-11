import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/shared/types/authResponse.interface';
import { map } from 'rxjs/operators';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) { }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(map(resp => resp.user));
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
    .pipe(map (resp => resp.user));
  }
}
