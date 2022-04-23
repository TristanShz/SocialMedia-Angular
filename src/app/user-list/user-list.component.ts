import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {userInterface} from "../Interfaces/userInterface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList!:Array<userInterface>
  constructor(public userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  goToUser(id:number){
    this.router.navigate(["/user/"+ id]);
  }
}
