import { Injectable } from '@angular/core';
import { Repositories } from './repositories';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username!:string;
  user!:User;
  repos!:Repositories;
  reposArray:any;
  BaseUrl = "https://api.github.com/users/";
  FinalUrl ="?client_id=63803c21ae36ca102d8f&client_secret=035207e594845697a248822218ac167e7735bb0b";
  Api= "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"
  ;
  

  constructor() {
    this.username = "Gakur";
    this.user= new User ("","","",0,0,0,"");
    this.repos = new Repositories("","","");
    this.reposArray = [];
  }
}
