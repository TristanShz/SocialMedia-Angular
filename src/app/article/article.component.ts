import {Component, OnChanges, OnInit} from '@angular/core';
// import {ArticlesInterface} from "../Interfaces/articlesInterface";
import { ArticleService} from "../article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesInterface} from "../Interfaces/articlesInterface";
import {CommentsService} from "../comments.service";
import { CommentsInterface } from "../Interfaces/commentsInterface"
import {NgForm, NgModel} from "@angular/forms";
import {UserConnectedService} from "../user-connected.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  that = this;
  idArticle:number;
  currentArticle!:ArticlesInterface;
  comments?:Array<CommentsInterface>;
  constructor(private articleService:ArticleService, private route: ActivatedRoute, private commentsService:CommentsService,
              public userConnected:UserConnectedService, private router:Router) {
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

  addComment(contenu:NgForm){
    let commentToAdd = {
      idArt: this.idArticle,
      contenu: contenu.value['contenu'],
    };

    this.commentsService.addComment(commentToAdd)
      .subscribe(data => {
        console.log(data);
        this.commentsService.getComment(this.idArticle)
          .subscribe(comments=>{
            console.log(comments);
            this.comments= (comments);
          })
      })
  }

  deleteComment(commentId:number){
    this.commentsService.deleteComment(commentId)
      .subscribe(data => {
        this.commentsService.getComment(this.idArticle)
          .subscribe(comments=>{
            this.comments= (comments);
          })
      })
  }

  deleteArticle(commentId:number){
    this.articleService.deleteArticle(commentId)
      .subscribe(data => {
        this.router.navigate(["/home"]);
      })
  }







}
