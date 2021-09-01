import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repositories } from '../repositories';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css'],
  providers: [GitServiceService]
})
export class GithubsearchComponent implements OnInit {
  user!: User;
  repository!: Repositories;
  public username!: string;
  reposArray!: any[];


  constructor(private gitSearch: GitServiceService) { }

  searchProfile() {
    this.gitSearch.updateUser(this.username);
    this.gitSearch.userRequest(this.username);
    this.gitSearch.repositoryRequest();
    this.reposArray = this.gitSearch.reposArray;
  }
  ngOnInit() {
  //   this.gitSearch.userRequest();
  //   this.user = this.gitSearch.user;

  //   this.gitSearch.repositoryRequest();
  //   this.reposArray = this.gitSearch.reposArray;
  // }

}
}
