import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {
  
  blogs = [
    { id: 1, heading: "PRODUCT DEVELOPMENT", date: "May 23, 2021", content: "Digital disruptions are growing by leaps and bounds. Enterprises need to strategize and accelerate digital transformation initiatives to stay ahead of the curve. The first step towards this.", btn: "read details" },
    { id: 2, heading: "DIGITAL COMMERCE EXPERIENCE DESIGN", date: "May 23, 2021", content: "Digital disruptions are growing by leaps and bounds. Enterprises need to strategize and accelerate digital transformation initiatives to stay ahead of the curve. The first step towards this.", btn: "read details" },
    { id: 3, heading: "NEWS & EVENTS", date: "May 23, 2021", content: "Digital disruptions are growing by leaps and bounds. Enterprises need to strategize and accelerate digital transformation initiatives to stay ahead of the curve. The first step towards this.", btn: "read details" }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openLink(id: number){
    this.router.navigate(['/blog-detail/'+id]);
  } 

}
