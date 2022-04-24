import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {userInterface} from "../Interfaces/userInterface";
import {Router} from "@angular/router";
import {UserConnectedService} from "../user-connected.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(public userService:UserService, private router:Router,public userConnected:UserConnectedService) { }

  ngOnInit(): void {
    if(!this.userConnected.user){
      this.router.navigate(["/login"]).then(() => { alert("Veuillez vous connecter")});
    }
  }
  goToUser(id:number){
    this.router.navigate(["/user/"+ id]);
  }
}
