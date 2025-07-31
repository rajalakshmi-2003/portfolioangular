import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  
})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Rajalakshmi Rajavelu",
    title: "Hi all, I'm Rajalakshmi",
    subTitle: "Software Developer with hands-on experience in Angular, Spring Boot, HTML, CSS, JavaScript, Bootstrap, SQL and Java. Skilled in building responsive web applications and scalable backend solutions.",
    resumeLink: "https://drive.google.com/file/d/1ba6eCVRhf36bPEtPP-oH_Fxi0pqR2UH6/view"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
