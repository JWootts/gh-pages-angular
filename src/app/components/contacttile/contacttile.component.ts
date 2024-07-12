import { Component, Input } from '@angular/core';
import { ContactDetails } from '../../interfaces/interfaces';

@Component({
  selector: 'app-contacttile',
  templateUrl: './contacttile.component.html',
  styleUrl: './contacttile.component.css'
})
export class ContacttileComponent {

  @Input()
  details!: ContactDetails;

  redirectLink() {
    window.location.href = `${this.details.link}`
  }

}
