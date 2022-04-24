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
  urlComment = "https://reseau.jdedev.fr/api/comment"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userConnected.user?.token,
    })
  };
  articlesList?:Array<ArticlesInterface>;
  constructor(private http: HttpClient, private userConnected:UserConnectedService) { }

  addComment(comment:object){
    const body = JSON.stringify(comment);
    console.log(body);
    return this.http.post(this.urlComment, body, this.httpOptions);
  }

  getComment(id:number){
      return this.http.get<Array<CommentsInterface>>(this.urlBase + `/${id}/comment`, this.httpOptions)
  }

  deleteComment(id:number){
    return this.http.delete(this.urlComment + `/${id}`, this.httpOptions);
  }
}
