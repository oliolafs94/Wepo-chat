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

	exitRoom(room : string) {
			this.socket.emit('partroom', room);
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

	getUsersInRoom(roomName: string): Observable<string[]> {
	  const observable = new Observable ( observer => {
	    this.socket.emit('joinroom');
	    const param = {
	        room: roomName
	    };
		this.socket.on('updateusers', param, (users, obs) => {
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

	getMessages(roomName: string): Observable<string[]> {
      const observable = new Observable( observer => {
      	const param = {
	      room: roomName
	    };
        this.socket.on('updatechat', param, (messages) => {
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

  	// sendMessage(data: string): Observable<string[]> {
   //    const observable = new Observable( observer => {
   //    	const param = {
	  //     room: roomName
	  //   };
   //      this.socket.emit('joinroom', param, function(a, b) {
	  //         observer.next(a);
	  //     });
   //    });
   //    return observable;
  	// }
}
