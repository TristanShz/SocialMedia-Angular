import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  constructor(public articleService:ArticleService, private router:Router, public userService:UserService) {
  }

  ngOnInit(): void {
  }
  goToArticle(id:number){
    this.router.navigate(["/article/"+ id]);
  }
  goToUser(id:number){
    this.router.navigate(["/user/"+ id]);
  }
}
