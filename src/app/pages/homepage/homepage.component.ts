import { Component } from '@angular/core';
import { aboutme } from '../../../assets/data/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  aboutMeList: any = aboutme;
  viewResume: boolean = false;
  
}
