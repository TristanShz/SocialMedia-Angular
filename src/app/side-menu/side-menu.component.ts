import { Component, OnInit, Input } from '@angular/core';
import { UserConnectedService } from '../user-connected.service'
import { userInterface } from "../Interfaces/userInterface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit{

  constructor(public userConnectedService: UserConnectedService, private router:Router) {
  }

  ngOnInit(): void {
  }
  goToUser(id:number |undefined){
    if(id){
      this.router.navigate(["/user/"+ id]);
    }else return;

  }

  disconnect(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
