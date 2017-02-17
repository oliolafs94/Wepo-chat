import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service.ts"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  loginFailed : boolean = false; 
   chatService : ChatService;

  constructor(private chatService : ChatService) { }

  ngOnInit() {
  }

  onLogin(){
  	this.socket.emit("adduser", this.userName, succeeded => {
    	if (!succeeded) { 
    		this.loginFailed = true;
    	} 
    	else {
    		console.log("Login succeeded!")
    	}
	});
  }
}
