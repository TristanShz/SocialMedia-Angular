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
  constructor(private http:HttpClient) {
  }
  getUser(id:number, token:string){

    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token,
      })
    }
    return this.http.get<userInterface>(this.urlBase + `/${id}`, headers)
      .subscribe(user => {
        this.userConnected = user;
      });
  }

}
