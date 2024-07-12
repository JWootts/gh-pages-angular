import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ClrWizard } from '@clr/angular';

import '@cds/core/icon/register.js';
import { ClarityIcons, helpInfoIcon } from '@cds/core/icon';
import { GitHubCloneRequest } from '../../interfaces/interfaces';

ClarityIcons.addIcons(helpInfoIcon);

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectcardComponent {

  @ViewChild('wizardmd') wizardMedium: ClrWizard | undefined;

  @Input()
  header: string = '';

  @Input()
  desc: string = '';

  @Input()
  createdDate: string = '';

  @Input()
  lang: string = '';

  @Input()
  link: string = '';

  @Input()
  cloneInfo: GitHubCloneRequest | undefined;

  @Output() onClone: EventEmitter<any> = new EventEmitter();

  cloneWizardOpen: boolean = false;

  redirectLink() {
    window.location.href = `${this.link}`
  }

  cloneClicked(): void {
    this.onClone.emit([this.cloneInfo]);
  }

}

