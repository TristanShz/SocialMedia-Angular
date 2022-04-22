import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  idUser:number;
  constructor(private userService:UserService, private route:ActivatedRoute) {
    this.idUser = 0
  }

  ngOnInit(): void {
    let that = this;
    this.route.params.subscribe(params=>{
      that.idUser = parseInt(params['id']);
    });
    this.userService.getUser(this.idUser)
      .subscribe(user => {

      })
  }

}
