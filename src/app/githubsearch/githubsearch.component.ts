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
  public username!: string;
  reposArray: Repositories[] = []


  constructor(private gitSearch: GitServiceService) {
    console
  }
  ngOnInit(): void {

  }

  searchProfile() {
    // this._githubService.updateUsername(this.username);
    this.gitSearch.userRequest(this.username).subscribe((user: any) => {
      this.user = user;
      console.log(user);
    });
    this.gitSearch.repositoryRequest(this.username).subscribe((repos: any) => {
      this.reposArray = repos
      console.log(repos)
    })
  }

}

