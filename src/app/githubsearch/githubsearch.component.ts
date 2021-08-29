import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {
  user!: User;
  public username!: string

  constructor() { }

  ngOnInit(): void {
  }

}
