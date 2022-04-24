import {Component, OnChanges, OnInit} from '@angular/core';
// import {ArticlesInterface} from "../Interfaces/articlesInterface";
import { ArticleService} from "../article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesInterface} from "../Interfaces/articlesInterface";
import {CommentsService} from "../comments.service";
import { CommentsInterface } from "../Interfaces/commentsInterface"
import {NgForm, NgModel} from "@angular/forms";
import {UserConnectedService} from "../user-connected.service";
import {UserService} from "../user.service";

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
              public userConnected:UserConnectedService, private router:Router, public userService:UserService) {
    this.idArticle = 0;
  }

  ngOnInit(): void {
    if(this.userConnected.user){
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
    }else{
      this.router.navigate(["/login"]).then(() => { alert("Veuillez vous connecter")});
    }

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

  deleteArticle(articleId:number){
    this.articleService.deleteArticle(articleId)
      .subscribe(data => {
        this.router.navigate(["/home"]);
      })
  }
  goToUser(id:number){
    this.router.navigate(["/user/"+ id]);
  }

}
