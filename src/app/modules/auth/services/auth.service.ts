import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,of} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;
  constructor(private http:HttpClient) { }


  sendCredencials(email:string, password: string): Observable<any>{
    const body = {email,password};
    return this.http.post(`${this.URL}/auth/login`, body);

  }


}
