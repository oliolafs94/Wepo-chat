import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
	socket: any;
	roomOK: false;


	constructor( ) {
		this.socket = io('http://localhost:8080');
		this.socket.on('connect', function() {
	    	console.log('connect');
		});
	}

	login(userName: string): Observable<boolean> {
		const observable = new Observable( observer => {
			this.socket.emit('adduser', userName, succeeded => {
				console.log('Reply received.');
				observer.next(succeeded);
			});
		});
		return observable;
	}

	getRoomList(): Observable<string[]> {
	  const observable = new Observable ( observer => {
	  this.socket.emit('rooms');
			this.socket.on('roomlist', (lst) => {
				const strArr: string[] = [];
				for (const x in lst) {
					if (lst.hasOwnProperty(x)) {
						strArr.push(x);
					}
				}
				observer.next(strArr);
			});
		});
		return observable;
	}

	getUserList(): Observable<string[]> {
	  const observable = new Observable ( observer => {
	  this.socket.emit('users');
			this.socket.on('userlist', (users) => {
				const strArr: string[] = [];
				for (let i = 0; i < users.length; i++) {
					if (users.hasOwnProperty(i)) {
						strArr.push(users[i]);
					}
				}
				observer.next(strArr);
			});
		});
		return observable;
	}

	getUsersInRoom(): Observable<string[]> {
	  const observable = new Observable ( observer => {
	  this.socket.emit('joinroom');
			this.socket.on('updateusers', (users, obs) => {
				const strArr: string[] = [];
				for (const x in users) {
					if (users.hasOwnProperty(x)) {
						strArr.push(users);
					}
				}
				observer.next(strArr);
			});
		});
		return observable;
	}

	addRoom(roomName: string): Observable<boolean> {
	  const observable = new Observable( observer => {
	    const param = {
	      room: roomName
	      };

	      this.socket.emit('joinroom', param, function(a, b) {
	          observer.next(a);
	      });
	    });
	    return observable;
	}

	getMessages(): Observable<string[]> {
      const observable = new Observable( observer => {
        this.socket.on('updatechat', (roomName, messages) => {
          console.log(roomName + ' ' + messages);
          const strArr: string[] = [];
          for (const x in messages) {
		    if (messages.hasOwnProperty(x)) {
		  	  strArr.push(messages);
		    }
		  }
          observer.next(strArr);
        });
      });
      return observable; 
  	}
}
