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
      'Content-Type': 'application/json'
    })
  };
  articlesList?:Array<ArticlesInterface>;
  constructor(private http: HttpClient, private userConnected:UserConnectedService) { }

  addArticle(user:object){
    const body = JSON.stringify(user);
    return this.http.post(this.urlBase, body, this.httpOptions);
  }

  getArticles(){
    if(this.userConnected.user.token) {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.userConnected.user.token,
        })
      }
      return this.http.get<Array<ArticlesInterface>>(this.urlBase, headers)
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
}
