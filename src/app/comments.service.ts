import { Injectable } from '@angular/core';
import { ArticlesInterface } from "./Interfaces/articlesInterface";
import { UserConnectedService } from "./user-connected.service";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {CommentsInterface} from "./Interfaces/commentsInterface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  urlBase = "https://reseau.jdedev.fr/api/article"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  articlesList?:Array<ArticlesInterface>;
  constructor(private http: HttpClient, private userConnected:UserConnectedService) { }

  addComment(comment:object){
    const body = JSON.stringify(comment);
    console.log(body);
    return this.http.post(this.urlBase, body, this.httpOptions);
  }

  getComment(id:number){
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.userConnected.user.token,
        })
      }
      return this.http.get<Array<CommentsInterface>>(this.urlBase + `/${id}/comment`, headers)
  }

  getOneArticle(id:number){
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userConnected.user.token,
      })
    }
    return this.http.get<ArticlesInterface>(this.urlBase+ `/${id}`, headers)
  }
}
