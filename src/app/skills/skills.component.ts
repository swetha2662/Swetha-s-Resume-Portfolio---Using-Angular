import { Component,OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Languages - C, C++, Python, Java',      
    },
    {
      name: 'Web Development - HTML, CSS, JavaScript, ReactJS - beginner',
    },
    {
      name: 'Web Frameworks - Angular, AngularJS',
    },
    {
      name: 'Database - MySQL, PHP',
    },
    {
      name: 'Data Structures and Algorithms',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
