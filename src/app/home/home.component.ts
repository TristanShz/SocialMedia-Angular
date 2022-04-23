import { Component, OnInit } from '@angular/core';
import {UserConnectedService} from "../user-connected.service";
import { ArticleService } from "../article.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userConnectedService: UserConnectedService, public articleService: ArticleService) {
    this.userConnectedService.getUser();
    this.articleService.getArticles();
  }

  ngOnInit(): void {
  }

  addArticle(articleForm: NgForm) {
    this.articleService.addArticle(articleForm.value)
      .subscribe(data => {
        console.log(data);
        this.articleService.getArticles();
      })
  }

}
