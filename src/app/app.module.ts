import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ChatServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

