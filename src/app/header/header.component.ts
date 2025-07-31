import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [


    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Rajalakshmi Rajavelu",
    title: "Hi all, I'm Rajalakshmi",
    subTitle: "Software Developer with hands-on experience in Angular, Spring Boot, HTML, CSS, JavaScript, Bootstrap, SQL and Java. Skilled in building responsive web applications and scalable backend solutions.",
    resumeLink: "https://drive.google.com/file/d/1ba6eCVRhf36bPEtPP-oH_Fxi0pqR2UH6/view"
  }

  ngOnInit(): void {
  }

}
