import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  createUser(){
    this.userService.createUser(this.user)
      .subscribe(data => {
        alert(data)
      });
  }

}
