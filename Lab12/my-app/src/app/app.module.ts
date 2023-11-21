import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsModule } from './posts/posts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PostsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
