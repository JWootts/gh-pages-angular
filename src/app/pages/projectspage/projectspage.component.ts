import { Component } from '@angular/core';

import '@cds/core/icon/register.js';
import { ClarityIcons, folderIcon, cloneIcon } from '@cds/core/icon';

import { GitHubCloneRequest } from '../../interfaces/interfaces';
import { GithubLookupService } from '../../services/github-lookup/github-lookup.service';

ClarityIcons.addIcons(folderIcon, cloneIcon);

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css'
})
export class ProjectspageComponent {

  githubList: any[] | undefined;

  //clone wizard props
  isCloneWizardOpen: boolean = false;
  cloneProps: GitHubCloneRequest | undefined;

  ngOnInit() {
    this.githubService.returnGitRepos()
      .subscribe(data => {
        this.githubList = data;
        console.log(data);
      }); 
  }

  loadClone(req: GitHubCloneRequest) {
    this.cloneProps = req;
    this.isCloneWizardOpen = true;
  }

  constructor(private githubService: GithubLookupService) {}
}

