import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomId: string;
  users: string[];
  messages: string[];

  constructor(private router: Router, private route: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
    this.chatService.getUsersInRoom().subscribe( lst => {
      this.users = lst;
    });
    this.chatService.getMessages().subscribe( lst => {
      this.messages = lst;
    });
  }
}
