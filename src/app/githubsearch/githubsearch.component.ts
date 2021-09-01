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
    this.user=new User("","","",0,0,0,"",new Date())
  }
  ngOnInit(): void {

  }

  searchProfile() {
    // this._githubService.updateUsername(this.username);
    this.gitSearch.userRequest(this.username).subscribe((user: any) => {
      this.user = user;
    });
    this.gitSearch.repositoryRequest(this.username).subscribe((repos: any) => {
      this.reposArray = repos
    })
  }

}

