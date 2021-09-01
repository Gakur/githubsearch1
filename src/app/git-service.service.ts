import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repositories } from './repositories';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username:string;
  user:User;
  repos:Repositories;
  reposArray:any;
  BaseUrl = "https://api.github.com/users/";
  ;
  

  constructor(private http: HttpClient) {
    this.username = "Gakur";
    this.user= new User ("","","",0,0,0,"", new Date);
    this.repos = new Repositories("","","");
    this.reposArray = [];
  }

  userRequest(username:string){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repository:number;
      html_url:string;
    }
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.BaseUrl + this.username + '?access_token=' + environment.ApiKey).toPromise().then(response=>{
        this.user.name = response.name;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.public_repository = response.public_repository;
        this.user.html_url = response.html_url;
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
      public_repository: any;
      name:string;
      html_url:string;
      description:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.BaseUrl + this.username +"/repos" + '?access_token=' + environment.ApiKey).toPromise().then(response=> {
        for (let repository of response.public_repository) {
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