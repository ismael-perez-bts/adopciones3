import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/users.service";
import { User } from "src/app/models/users";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

<<<<<<< HEAD
  users: User[];
  postUser(user: User): void {
    if (!user) {
      return;
    }
    this.userService.postUser(user).subscribe(user => {
      this.users.push(user);
    });
  }
=======
  //   users:User[];
  //   postUser(user:User):void{
  //     if (!user) {
  //       return;
  //     }
  //     this.userService.postUser(user)
  //     .subscribe( user => {
  //       this.users.push(user);
  //     })
  //   }
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20
}
