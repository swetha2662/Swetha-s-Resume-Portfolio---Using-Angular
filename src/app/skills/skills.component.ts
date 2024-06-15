import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'C', icon: 'c' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Python', icon: 'python' },
    { name: 'Java(Basics)', icon: 'java' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'Firebase', icon: 'firebase1' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Angular', icon: 'angular' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PHP', icon: 'php' }
  ];
}
