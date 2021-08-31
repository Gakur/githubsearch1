import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:"githubsearch",component:GithubsearchComponent },
  { path:"about", component: AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
