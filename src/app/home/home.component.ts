import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {UserConnectedService} from "../user-connected.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user")!);
  isConnected= {};
  constructor(public userConnectedService:UserConnectedService) {
    this.userConnectedService.getUser(this.user.id, this.user.token)
  }

  ngOnInit(): void {
  }

}
