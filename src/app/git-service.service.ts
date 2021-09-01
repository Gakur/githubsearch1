import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username = "Gakur";
  private repo_name = ""


  constructor(private http: HttpClient) {
  }

  userRequest(username: string) {
    return this.http.get("https://api.github.com/users/" + username + '?access_token=' + environment.accessToken)
  }
  repositoryRequest(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos?access_token=' + environment.accessToken)
  }
}

