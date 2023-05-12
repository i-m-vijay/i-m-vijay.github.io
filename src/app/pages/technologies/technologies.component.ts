import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})

export class TechnologiesComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  
}  
