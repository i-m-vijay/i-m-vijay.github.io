import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  bId: any ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bId = this.route.snapshot.params['blogId'];    
  }
}
