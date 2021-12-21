import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';


import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id: number;
  user: Observable<User[]>;
  p: number = 1;

  constructor(  
    private router: Router,
    private UserService: UserService) { }

  ngOnInit() {
    this.user = this.UserService.getusersList();

  }

}
