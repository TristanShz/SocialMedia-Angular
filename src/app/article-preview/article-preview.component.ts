import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  constructor(public articleService:ArticleService, private router:Router) {
  }

  ngOnInit(): void {
  }
  goToArticle(id:number){
    this.router.navigate(["/article/"+ id]);
  }
}
