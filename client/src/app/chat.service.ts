import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable()
export class ChatService {
  socket : any;

  constructor() { }
	this.socket = io("http://localhost:8080");
  	this.socket.on("connect", function(){
    	console.log("connect")
	});
}
