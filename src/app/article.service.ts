import { Injectable } from '@angular/core';
import { ArticlesInterface } from "./Interfaces/articlesInterface";
import { UserConnectedService } from "./user-connected.service";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlBase = "https://reseau.jdedev.fr/api/article"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userConnected.user.token,
    })
  };
  articlesList?:Array<ArticlesInterface>;
  constructor(private http: HttpClient, private userConnected:UserConnectedService) { }

  addArticle(article:object){
    const body = JSON.stringify(article);
    return this.http.post(this.urlBase, body, this.httpOptions);
  }

  getArticles(){
    if(this.userConnected.user.token) {
      return this.http.get<Array<ArticlesInterface>>(this.urlBase, this.httpOptions)
        .subscribe(articles => {
          this.articlesList = articles;
        });
    }else{
      return 0;
    }
  }

  getOneArticle(id:number){
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.userConnected.user.token,
        })
      }
      return this.http.get<ArticlesInterface>(this.urlBase+ `/${id}`, headers)
  }
  deleteArticle(id:number){
    return this.http.delete(this.urlBase + `/${id}`, this.httpOptions);
  }
}
