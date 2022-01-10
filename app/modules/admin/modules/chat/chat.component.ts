import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  //providers: [ WebSocketService, ChatService ]
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) {
		chatService.messages.subscribe(msg => {			
      console.log(msg.author);
		});
   
	}
  
  ngOnInit() {
  }
   private message = {
		author: 'tutorialedge',
		message: 'this is a test message'
	}

    sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.chatService.messages.next(this.message);
		this.message.message = '';

	}
}