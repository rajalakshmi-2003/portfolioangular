import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "BE Electronics and Communication Engineering",
      duration: "2024",
      subtitle: "Arasu Engineering College, Kumbakonam",
      content: "Successfully completed my BE in ECE from Arasu Engineering College, Kumbakonam.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2020",
      subtitle: "Higher Secondary School",
      content: "Successfully completed my intermediate studies in 2020 from Higher Secondary School, Jayankondam.\n" +
        "Major: Maths Biology.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2018",
      subtitle: "Higher Secondary School",
      content: "Successfully completed my high school studies in 2018 from Higher Secondary School, Jayankondam.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
