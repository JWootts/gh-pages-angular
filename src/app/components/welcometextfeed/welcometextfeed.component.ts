import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcometextfeed',
  templateUrl: './welcometextfeed.component.html',
  styleUrl: './welcometextfeed.component.css'
})
export class WelcometextfeedComponent {
  
  animatedText: string = '';

  @Input()
  inputString: string = '. . . welcome to my website';

  startAnimation(text: string): void {
    const words = text.split('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length) {
        this.animatedText += words[index] + '';
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);
  }

  ngOnInit(){
    this.startAnimation(this.inputString);
  }
}
