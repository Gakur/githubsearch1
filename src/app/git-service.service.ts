import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  private username = "Gakur";
  private repo_name = ""


  constructor(private http: HttpClient) {
  }

  userRequest(username: string) {
    return this.http.get("https://api.github.com/users/" + username + '?access_token=' + environment.ApiKey)
  }
  repositoryRequest(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos?access_token=' + environment.ApiKey)
  }
}

