import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  customOptions: any = {  
    center:false,
    loop:true,
    items:3,
    margin:0,
    dots:false,
    autoplay:true,   
    smartSpeed: 2000, 
    autoplayTimeout:7000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.5
      },
      740: {
        items: 2.5
      },
      940: {
        items: 2.5
      }
    },
    nav: true
  }
  
  data = [
  { img: "assets/img/home-slider1.jpg", title: "Slide 1", slideText: "We are specialized in Design, Development & Maintenance of Web & Mobile Applications."},
  { img: "assets/img/home-slider2.jpg", title: "Slide 2", slideText: "We make sure to optimize your cost for effective growth, enhance the productivity and help deliver projects in time." },
  { img: "assets/img/home-slider1.jpg", title: "Slide 3", slideText: "We are specialized in Design, Development & Maintenance of Web & Mobile Applications."}
];  

helpForm = this.fb.group({
  name: ['', Validators.required],
  email: [''],
  phone: [''],
  message: ['']
});

onSubmit() {
  console.warn(this.helpForm.value);
}

constructor(private fb: FormBuilder) {
  this.title = 'Need Help?';
 }  
  ngOnInit(): void {
  }
}
