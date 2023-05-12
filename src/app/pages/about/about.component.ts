import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit { 

  // variables that holds number
  satisfied:number = 0;
  projectsDelivered:number = 0;
  positiveReviews:number = 0;
  teamMembers:number = 0;

  //setInterval Function with arrow function and set them in a variable
  satisfiedstop:any = setInterval ( ()=> {
  this.satisfied++;

  // to stop interval at specific number we use condition with clearInterval to stop function
  if(this.satisfied == 107)
  {
    clearInterval(this.satisfiedstop);
  }

  }, 7)

// same process for others

  projectsDeliveredstop:any = setInterval ( ()=> {
    this.projectsDelivered++;
    if(this.projectsDelivered == 500)
    {
      clearInterval(this.projectsDeliveredstop);
    }
  
    }, 2)

    positiveReviewsstop:any = setInterval ( ()=> {
      this.positiveReviews++;
      if(this.positiveReviews == 600) {
        clearInterval(this.positiveReviewsstop);
      }

    }, 2)

    teamMembersstop:any = setInterval ( ()=> {
      this.teamMembers++;
      if(this.teamMembers == 70) {
        clearInterval(this.teamMembersstop);
      }

    }, 7)

  constructor() { }

  ngOnInit(): void {
  }
}

/* We have used in this
- Creating variables 
- string Interpolation
- setInterval function
- ()=> arrow function
- clearInterval */

