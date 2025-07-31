import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "About Me 👩‍💻",
    subTitle: "ENTHUSIASTIC SOFTWARE DEVELOPER WITH A PASSION FOR BUILDING MODERN WEB APPLICATIONS",
    skills: [
      "⚡ Develop responsive and interactive front-end applications using Angular, HTML, CSS, and Bootstrap",
      "⚡ Build robust back-end services with Java, Spring Boot, and MySQL",
      "⚡ Perform testing, bug fixing, and deployment to ensure seamless user experiences",
      "⚡  Built an AI-Driven Drone project for real-time disaster response and humanitarian aid",
      "⚡  Skilled in designing visuals, social media posts, and video editing tools like CapCut"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
