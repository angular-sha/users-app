import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  /**
   * On Initialization, users array needs to be populated with all the users
   */
  ngOnInit() {
    this.userService.getAllusers().subscribe(data=>{
      this.users = data;
    });
  }

  public deleteUser(userId: string){
    
    this.userService.deleteUser(userId)
      .subscribe( data => {
        this.users = this.users.filter(user=> user.userId !== userId);
        alert(data);
      })
  }

}
