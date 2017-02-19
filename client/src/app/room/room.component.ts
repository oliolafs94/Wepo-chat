import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomId : string;
  userId: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
    this.userId = this.route.snapshot.params['userId'];
  }

}
