import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/portfolio",
    },
    {
      link: "",
    },
    {
      link: "",
    },
    {
      link: ""
    },
    {

      link: "",
    },
    {
      link: "",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


    this.apollo.query<any>({
      query: gql`
      {
      
      `
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
    });
  }

}
