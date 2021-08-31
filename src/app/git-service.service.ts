import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repositories } from './repositories';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username!: string;
  user!: User;
  repos!: Repositories;
  reposArray: any;
  BaseUrl = "https://api.github.com/users/";
  Api = "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";
  http!: HttpClient;
  repositories!: Repositories;


  constructor(private Http: HttpClient) {
    this.username = "Gakur";
    this.user = new User("", "", "", 0, 0, 0, "");
    this.repos = new Repositories("", "", "");
    this.reposArray = [];
  }
  userRequest() {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repository: number;
      html_url: string;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username + '?access_token=' + this.Api).toPromise().then(response=>{
        this.user.name = response.json().name;
        this.user.login = response.json().login;
        this.user.avatar_url = response.json().avatar_url;
        this.user.followers = response.json().followers;
        this.user.following = response.json().following;
        this.user.public_repository = response.json().public_repos;
        this.user.html_url = response.json().html_url;
        resolve(response)
        console.log("one");
        console.log(this.user);
      },
      error=>{
        console.log("Error occured")
        reject(error);
      })
    })
    return Promise;
  }

  repositoryRequest(){
    this.reposArray = [];
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username +"/repos" + '?access_token=' + this.Api).toPromise().then(response=> {
        for (let repository of response.json()) {
        this.repos.name = repository.name;
        this.repos.html_url = repository.html_url;
        this.repos.description = repository.description;
        this.repos = new Repositories("","","");
        this.reposArray.push(this.repos);
          } 
        resolve(response)
        console.log("two");
        console.log(response);
      },
      error=>{
        console.log("Error occured");
      })
    });
    return promise;
  }
  updateUser(username:string){
    this.username = username;
  }
}
