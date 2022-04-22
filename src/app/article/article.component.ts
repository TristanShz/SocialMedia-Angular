import { Component, OnInit } from '@angular/core';
// import {ArticlesInterface} from "../Interfaces/articlesInterface";
import { ArticleService} from "../article.service";
import { ActivatedRoute } from "@angular/router";
import {ArticlesInterface} from "../Interfaces/articlesInterface";
import {CommentsService} from "../comments.service";
import { CommentsInterface } from "../Interfaces/commentsInterface"

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  that = this;
  idArticle:number;
  currentArticle?:ArticlesInterface;
  comments?:Array<CommentsInterface>;
  constructor(private articleService:ArticleService, private route: ActivatedRoute, private commentsService:CommentsService) {
    this.idArticle = 0;
  }

  ngOnInit(): void {
    let that = this;
    this.route.params.subscribe(params => {
      that.idArticle = parseInt(params['id']);
    })
    this.articleService.getOneArticle(this.idArticle)
      .subscribe(article=>{
        console.log(article);
        this.currentArticle = article;
      })
    this.commentsService.getComment(this.idArticle)
      .subscribe(comments=>{
        console.log(comments);
        this.comments= (comments);
      })
  }



}
