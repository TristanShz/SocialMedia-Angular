import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserConnectedService} from "../user-connected.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private userConnected:UserConnectedService) {
  }
  loginUser(user: NgForm){
    interface dataObject {
      [key: string]: any
    }
    this.userService.login(user.value)
      .subscribe(data => {
        console.log(data);
        let dataObj: dataObject = data;
        localStorage.setItem("user", JSON.stringify({id: dataObj['id'], token: dataObj['token']}));
        this.userConnected.getUser();
        this.router.navigate(["/home"]);
      });
  }
  ngOnInit(): void {

  }

}
