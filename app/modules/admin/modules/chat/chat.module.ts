import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WebSocketService } from './web-socket.service';
import { ChatService } from './chat.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [WebSocketService, ChatService]
})
export class ChatModule { }