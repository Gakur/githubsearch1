import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username = "Gakur";
  private repo_name = ""


  constructor(private http: HttpClient) {
    console.log("Github init...")
  }

  userRequest(username: string) {
    return this.http.get("https://api.github.com/users/" + username)
  }
  repositoryRequest(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos')
  }
}

