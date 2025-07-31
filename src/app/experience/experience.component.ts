import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Frontend Developer",
        company: "Cadpoint",
        color: "#3f703f",
        companylogo: "../../../assets/images/67.png",
        date: "Jan 2024",
        desc: "Frontend Developer at Cadpoint",
        
      },
      {
        role: "Electronics & Communication Engineering",
        company: "Arasu Engineering College",
        color: "#3781c2",
        companylogo: "../../../assets/images/aura.jpeg"  ,
        date: "Aug 2020 – Jul 2024",
        desc: "I have completed my 4 year graduation degree in Electronics & Communication  with overall CGPA 8.6",
      },
      {
        role: "Software Developer",
        company: "Nandalala Infotech",
        color: "#ff9102",
        companylogo: "../../../assets/images/677.jpeg",
        date: "Oct 2024",
        desc: "Software Developer at Nandalala Infotech",
        },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
