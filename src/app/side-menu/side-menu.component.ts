import { Component, OnInit, Input } from '@angular/core';
import { UserConnectedService } from '../user-connected.service'
import { userInterface } from "../Interfaces/userInterface";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit{

  constructor(public userConnectedService: UserConnectedService) {
  }

  ngOnInit(): void {
  }

}
