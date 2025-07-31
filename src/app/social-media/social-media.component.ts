import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/rajalakshmi-2003",
    linkedin: "https://www.linkedin.com/in/rajalakshmi2003/",
    gmail: "rajrajavelu2003@gmail.com",
    instagram : "https://www.instagram.com/rajalakshmi_rajavelu/?hl=en",
    
  };
  constructor() { }

  ngOnInit(): void {
  }

}
