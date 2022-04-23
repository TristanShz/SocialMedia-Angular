import { Injectable } from '@angular/core';
import { UserConnectedService } from "./user-connected.service";

import { HttpClient, HttpHeaders } from '@angular/common/http'
import {userInterface} from "./Interfaces/userInterface";
import {ArticlesInterface} from "./Interfaces/articlesInterface";
import {CommentsInterface} from "./Interfaces/commentsInterface";
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
  userList?:Array<userInterface>;
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
    return this.http.get<userInterface>(this.urlBase + `/${id}`, headers)
  }
  getUserArticles(id:number){
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.userConnected.user.token,
      })
    }
    return this.http.get<Array<ArticlesInterface>>(this.urlBase + `/${id}/article`, headers)
  }
  getUserComments(id:number){
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.userConnected.user.token,
      })
    }
    return this.http.get<Array<CommentsInterface>>(this.urlBase + `/${id}/comment`, headers)
  }
  getAllUsers(){
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.userConnected.user.token,
      })
    }
    return this.http.get<Array<userInterface>>(this.urlBase, headers)
      .subscribe(users => {
        this.userList = users;
      })
  }
}
