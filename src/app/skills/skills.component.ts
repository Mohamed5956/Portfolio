import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills:string[]

  constructor() {
    this.skills = [
      'HTML',
      'CSS',
      'JavaScript',
      'BootsTrap',
      'TailWind',
      'jQuery',
      'Angular',
      'PHP',
      'Laravel',
      'NodeJs',
      'MongoDB',
      'MySQL',
    ];
   }
  
  ngOnInit(): void {
  }

}
