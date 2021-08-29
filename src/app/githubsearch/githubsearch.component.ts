import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {
  user!: User;
  public username!: string;
  repositories!:Repositories;
  reposArray!:any[];
  gitSearch: any;

  constructor() { }

  searchProfile(){
    this.gitSearch.updateUser(this.username);
    this.gitSearch.userRequest();
    this.gitSearch.repositoryRequest();
    this.reposArray = this.gitSearch.reposArray;
     }
  ngOnInit() {
    this.gitSearch.userRequest();
    this.user = this.gitSearch.user;

    this.gitSearch.repositoryRequest();
    this.reposArray = this.gitSearch.reposArray;
  }
}