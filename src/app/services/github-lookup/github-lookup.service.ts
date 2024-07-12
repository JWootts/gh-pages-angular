import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { github_repos_url } from '../../../assets/data/data'
import { github_api_key } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class GithubLookupService {


  returnGitRepos() {
     return this.http.get<any>(github_repos_url, { 
        headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${github_api_key}`,
                'X-GitHub-Api-Version': '2022-11-28'}
                })
  }

  constructor(private http: HttpClient) { }
}
