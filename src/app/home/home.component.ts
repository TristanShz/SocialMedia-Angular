import { Component, OnInit } from '@angular/core';
import {UserConnectedService} from "../user-connected.service";
import { ArticleService } from "../article.service";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userConnectedService: UserConnectedService, public articleService: ArticleService, public userService:UserService,
              private router:Router) {
    if(userConnectedService.user){
      this.articleService.getArticles();
      this.userService.getAllUsers();
      this.userConnectedService.getUser();
    }else this.router.navigate(["/login"]).then(() => { alert("Veuillez vous connecter")});

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
