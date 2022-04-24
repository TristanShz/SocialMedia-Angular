import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  deleteAccount(){
    this.userService.deleteAccount();
  }
}
