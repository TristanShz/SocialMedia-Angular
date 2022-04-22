import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import{ userInterface } from './Interfaces/userInterface'
@Injectable({
  providedIn: 'root'
})
export class UserConnectedService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  userConnected?:userInterface;
  user = JSON.parse(localStorage.getItem("user")!);
  constructor(private http:HttpClient) {
  }
  getUser(){
    if(this.user.token) {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.user.token,
        })
      }
      return this.http.get<userInterface>(this.urlBase + `/${this.user.id}`, headers)
        .subscribe(user => {
          this.userConnected = user;
        });
    }else{
      return 0;
    }
  }

}
