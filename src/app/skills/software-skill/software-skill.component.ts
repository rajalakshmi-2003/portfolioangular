import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Angular",
    fontAwesomeClassname: "fab fa-angular"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf" 
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database" 
  },
  
   ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
