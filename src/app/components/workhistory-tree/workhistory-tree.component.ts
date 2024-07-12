import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workhistory-tree',
  templateUrl: './workhistory-tree.component.html',
  styleUrl: './workhistory-tree.component.css'
})
export class WorkhistoryTreeComponent {

  @Input()
  workExperienceList: any;

}
