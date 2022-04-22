import { Component, OnInit } from '@angular/core';
import {UserConnectedService} from "../user-connected.service";
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userConnectedService:UserConnectedService, public articleService:ArticleService) {
    this.userConnectedService.getUser();
    this.articleService.getArticles();
  }

  ngOnInit(): void {
  }

}
