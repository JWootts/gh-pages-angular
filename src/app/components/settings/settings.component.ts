import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
  @Input() opened: boolean = false;
  @Output() openedChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  darkmodeSetting: boolean = false;
  frenchMode: boolean = false;

  sessionTheme$: any = sessionStorage.getItem('cds-theme');
  sessionLang$: any = sessionStorage.getItem('lang');

  protected enableDarkmode(values:any){
    if(values.currentTarget.checked){
      document.body.setAttribute('cds-theme', 'dark');
      sessionStorage.setItem('cds-theme', 'dark');
    }else{
      document.body.setAttribute('cds-theme', 'light');
      sessionStorage.setItem('cds-theme', 'light');
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, private a: ChangeDetectorRef ) {
    if (this.sessionTheme$ !== null)
      this.darkmodeSetting = (this.sessionTheme$ === 'dark' ? true : false);
  }

  protected close() {
    this.openedChange.emit(false);
  }
}
