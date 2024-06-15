import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Coimbatore Institute of Technology",
      course: 'M.Sc. Software Systems',
      duration: '2020 - 2025',
      score: 'CGPA : 9.26',
    },
    {
      institute: 'G.D. Matriculation Higher Secondary School',
      course: 'Higher Secondary',
      duration: '2018 - 2020',
      score: '93.16%',
    },
    {
      institute: 'S.B.O.A Matriculation and Higher Secondary School',
      course: 'SSLC',
      duration: '2006 - 2018',
      score: '97.8%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
