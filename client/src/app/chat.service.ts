import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatService {
  socket : any;
  roomOK : false;

  constructor() {
	this.socket = io("http://localhost:8080");
  	this.socket.on("connect", function(){
    	console.log("connect")
	});
  }

	login(userName : string) : Observable<boolean>{
		const observable = new Observable( observer => {
			this.socket.emit('adduser', userName, succeeded => {
				console.log("Reply received.");
	    		observer.next(succeeded);
			});
		});
		return observable;
	}

	getRoomList() : Observable<string[]> {
		const observable = new Observable ( observer => {
			this.socket.emit('rooms');
			this.socket.on('roomlist', (lst) => {
				const strArr: string[] = [];
				for(const x in lst){
					if(lst.hasOwnProperty(x)){
						strArr.push(x);
					}
				}
				observer.next(strArr);
			});
		});
		return observable;
	}

  addRoom(roomName: string) : Observable<boolean> {
      const observable = new Observable( observer => {
        //TODO: valigate that the room name is valid!

        const param = {
          room : roomName
          };

          this.socket.emit('joinroom', param, function(a, b) {
              observer.next(a);
          });
        });
        return observable;
    }

    getMessages(roomName: string) : Observable<string[]> {
	    const observable = new Observable( observer => {
	    	this.socket.on('updatechat', (roomName, messages) => {
		        const strArr: string[] = [];
		        strArr.push(messages);
		        observer.next(strArr);
	      	});
	    });
	    return observable;
  	}

  	
}
