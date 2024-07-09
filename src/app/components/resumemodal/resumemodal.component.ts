import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resumemodal',
  templateUrl: './resumemodal.component.html',
  styleUrl: './resumemodal.component.css'
})
export class ResumemodalComponent {

  pdfSrc = "../../assets/pdf/resume.pdf";

  @Input()  clrModalOpen: boolean = false;
  @Output() clrModalOpenChange = new EventEmitter();

  reset(){
    this.clrModalOpen = false;
    this.clrModalOpenChange.emit(false);
  }

}
