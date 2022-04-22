import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from "@angular/router";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) {
  }
  addUser(user: NgForm){
    this.userService.addUser(user.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(["/login"]);
      });
  }
  ngOnInit(): void {
  }

}
