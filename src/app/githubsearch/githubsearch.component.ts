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

  constructor() { }

  ngOnInit(): void {
  }

}
