import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "85%"
      },
      {
        Stack: "Backend",
        progressPercentage: "60%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "AzureDevOps",
        progressPercentage: "40%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
