import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  addUser(user:object){
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.urlBase, body, this.httpOptions);
  }

  login(user:object){
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.urlBase + "/connect", body, this.httpOptions);
  }

  getUser(id:number, token:string){

    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token,
      })
    }
    return this.http.get(this.urlBase + `/${id}`, headers)
      .subscribe(user=> {
        console.log(user);
      });
  }
}
