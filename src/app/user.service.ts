import { Injectable } from '@angular/core';
import { UserConnectedService } from "./user-connected.service";

import { HttpClient, HttpHeaders } from '@angular/common/http'
import {userInterface} from "./Interfaces/userInterface";
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
  constructor(private http: HttpClient, private userConnected:UserConnectedService) { }

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

  getUser(id:number){

    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.userConnected.user.token,
      })
    }
    return this.http.get(this.urlBase + `/${id}`, headers)
  }

  getAllUsers(){
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.userConnected.user.token,
      })
    }
    return this.http.get<Array<userInterface>>(this.urlBase, headers)
  }
}
