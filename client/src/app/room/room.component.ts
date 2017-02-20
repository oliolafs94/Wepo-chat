import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomName: string;
  users: string[];
  messages: string[];
  newMessage: string;
  exitFailed: boolean;
  isValid: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    this.roomName = this.route.snapshot.params['id'];

    this.chatService.getUsersInRoom(this.roomName).subscribe( lst => {
      this.users = lst;
    });
    this.chatService.getMessages(this.roomName).subscribe( lst => {
      this.messages = lst;
    });
  }

  onExitRoom() {
      this.chatService.exitRoom(this.roomName);
      this.router.navigate(['/rooms']);
    }

  sendMessage() {
    this.chatService.sendMessage(this.roomName, this.newMessage);
  }
}
