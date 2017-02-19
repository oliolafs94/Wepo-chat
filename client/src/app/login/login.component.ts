import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userName : string;
  loginFailed : boolean = false;
  //chatService : ChatService;

  constructor(private chatService : ChatService, router : Router) {
    this.chatService = chatService;
  }

  ngOnInit() {
  }

  onLogin() {
    console.log("Login called in component");
    this.chatService.login(this.userName).subscribe(succeeded => {
      console.log("Success!!");
      this.loginFailed = !succeeded;
      if(succeeded === true) {
        this.router.navigate(["/rooms"]);
        //TODO: Redirect to  RoomListcompnent
      }
    });
  }
}
