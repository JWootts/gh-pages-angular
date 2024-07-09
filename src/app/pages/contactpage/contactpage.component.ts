import { Component } from '@angular/core';
import { contactmedetails } from '../../../assets/data/data';
import { ContactDetails } from '../../interfaces/interfaces';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {

  contactData: ContactDetails[] = contactmedetails;

}
