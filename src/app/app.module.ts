import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitServiceService } from './git-service.service';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
