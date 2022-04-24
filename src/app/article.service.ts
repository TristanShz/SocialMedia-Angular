import { Injectable } from '@angular/core';
import { ArticlesInterface } from "./Interfaces/articlesInterface";
import { UserConnectedService } from "./user-connected.service";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlBase = "https://reseau.jdedev.fr/api/article"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userConnected.user?.token,
    })
  };
  articlesList?:Array<ArticlesInterface>;
  constructor(private http: HttpClient, private userConnected:UserConnectedService, private router:Router) { }

  addArticle(article:object){
    const body = JSON.stringify(article);
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userConnected.user?.token,
      })
    }
    return this.http.post(this.urlBase, body, headers);
  }

  getArticles(){
    let that = this;
    if(this.userConnected.user) {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.userConnected.user.token,
        })
      }
      return this.http.get<Array<ArticlesInterface>>(this.urlBase, headers)
        .subscribe( {
          next(articles){
            that.articlesList = articles;
          },error(err){console.log(err)}})
    }else{
      return 0;
    }
  }

  getOneArticle(id:number){
    return this.http.get<ArticlesInterface>(this.urlBase+ `/${id}`, this.httpOptions)
  }
  deleteArticle(id:number){
    return this.http.delete(this.urlBase + `/${id}`, this.httpOptions);
  }
}
