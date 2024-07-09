import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { public_key, service_id, template_id } from '../../../assets/data/data';

@Component({
  selector: 'app-emailwizard',
  templateUrl: './emailwizard.component.html',
  styleUrl: './emailwizard.component.css'
})
export class EmailwizardComponent {

  isSending: boolean = false;

  public sendEmail(e: Event) {
    this.isSending = true;
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target as HTMLFormElement, public_key)
      .then((result: EmailJSResponseStatus) => {
        var resetForm = <HTMLFormElement>document.getElementById('emailform');
        resetForm.reset();
        this.isSending = false;
        alert('email sent.');
      }, (error: { text: any; }) => {
        this.isSending = false;
        alert('issue sending email. please re-try.');
      });
  }

}
