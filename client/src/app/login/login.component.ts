import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  userName : string;
  loginFailed : boolean = false;

  constructor(private chatService : ChatService, private router : Router) {
    //this.chatService = chatService;
    //this.router = router;
=======
  userName: string;
  loginFailed: boolean = false;
  router: Router;
  // chatService : ChatService;

  constructor(private chatService: ChatService, router: Router) {
    this.chatService = chatService;
>>>>>>> ab85602c23a659804738823fa39ca6ee9ad7f3fc
  }

  ngOnInit() { }

  onLogin() {
    console.log('Login called in component');
    this.chatService.login(this.userName).subscribe(succeeded => {
      console.log('Success!!');
      this.loginFailed = !succeeded;
<<<<<<< HEAD
      if(succeeded === true) {
        this.router.navigate(["/rooms"]);

        //TODO: Redirect to  RoomListcompnent
=======
      if (succeeded === true) {
        this.router.navigate(['/rooms']);
        // TODO: Redirect to  RoomListcompnent
>>>>>>> ab85602c23a659804738823fa39ca6ee9ad7f3fc
      }
    });
  }
}
