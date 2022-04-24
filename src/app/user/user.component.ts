import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserConnectedService} from "../user-connected.service";
import {userInterface} from "../Interfaces/userInterface";
import {ArticlesInterface} from "../Interfaces/articlesInterface";
import {CommentsInterface} from "../Interfaces/commentsInterface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  idUser:number;
  currentUser!:userInterface;
  lastArticles!:Array<ArticlesInterface>;
  lastComments!:Array<CommentsInterface>;
  constructor(private userService:UserService, private route:ActivatedRoute, public userConnected:UserConnectedService,
              private router:Router) {
    this.idUser = 0
  }

  ngOnInit(): void {
    let that = this;
    if(this.userConnected.user){
      this.route.params.subscribe(params=>{
        that.idUser = parseInt(params['id']);
      });
      this.userService.getUser(this.idUser)
        .subscribe(user => {
          this.currentUser = user;
        })
      this.userService.getUserArticles(this.idUser)
        .subscribe(articles =>{
          this.lastArticles= articles.slice(0,5);
        })
      this.userService.getUserComments(this.idUser)
        .subscribe(comments =>{
          this.lastComments = comments.slice(0,5);
        })
    }else{
      this.router.navigate(["/login"]).then(() => { alert("Veuillez vous connecter")});
    }
    }
  goToArticle(id:number){
    this.router.navigate(["/article/"+ id]);
  }

}
