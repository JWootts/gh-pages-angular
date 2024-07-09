import { Component, Input } from '@angular/core';
import { bookIcon, certificateIcon, ClarityIcons, userIcon } from '@cds/core/icon';
import { suitcase2Icon } from '@cds/core/icon/shapes/suitcase-2.js';

ClarityIcons.addIcons(suitcase2Icon, userIcon, bookIcon, certificateIcon);

@Component({
  selector: 'app-dropdown-card',
  templateUrl: './dropdown-card.component.html',
  styleUrl: './dropdown-card.component.css'
})
export class DropdownCardComponent {

  @Input()
  header: string = '';

  @Input()
  desc: string = '';

  @Input()
  img: string = '';

  @Input()
  icon: string = '';

  @Input()
  open: boolean = false;

  @Input()
  tree: any = null;

}
