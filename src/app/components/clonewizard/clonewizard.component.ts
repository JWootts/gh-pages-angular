import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ClrWizard, ClrWizardPage } from '@clr/angular';
import { Clipboard } from '@angular/cdk/clipboard';

import { GitHubCloneRequest } from '../../interfaces/interfaces';

import '@cds/core/icon/register.js';
import { ClarityIcons, copyIcon } from '@cds/core/icon';
import { TranslateService } from '@ngx-translate/core';

ClarityIcons.addIcons(copyIcon);

@Component({
  selector: 'app-clonewizard',
  templateUrl: './clonewizard.component.html',
  styleUrl: './clonewizard.component.css'
})
export class ClonewizardComponent {

  @ViewChild('wizardmd') wizardMedium: ClrWizard | undefined;
  @ViewChild('firstpage') wizardFirstPage: ClrWizardPage | undefined;

  @Input() cloneWizardOpen: boolean = false;
  @Output() cloneWizardOpenChange = new EventEmitter();

  @Output()
  wizardClosed: boolean = false;

  @Input()
  githubClone: GitHubCloneRequest | undefined;
  
  cloneUrl: string = '';
  selectedClone: CloneTypes = CloneTypes.Https;
  enumTypes = CloneTypes;
  
  reset(){
    this.wizardMedium?.reset();
    this.cloneWizardOpenChange.emit(false);
  }

  copyToClipboard() {
    if(this.selectedClone === 'HTTPS' && this.githubClone !== undefined)
      this.clipboard.copy(this.githubClone.https_url);
    else if(this.selectedClone === 'SSH' && this.githubClone !== undefined)
      this.clipboard.copy(this.githubClone.ssh_url);
    else if(this.selectedClone === 'Github CLI' && this.githubClone !== undefined)
      this.clipboard.copy(this.githubClone.github_cli_url);

    alert(this.translateService.instant('projects.pull.select.p1.copy.clipboard'))
  }

  constructor(private clipboard: Clipboard, private translateService: TranslateService){ }
}

export enum CloneTypes {
  Https = 'HTTPS',
  Ssh = 'SSH',
  GithubCli = 'Github CLI'
}
