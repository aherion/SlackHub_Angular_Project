import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { PostActiveChatComponent } from './post-active-chat/post-active-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ChatServiceComponent,
      ActiveUserComponent,
    PostActiveChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

