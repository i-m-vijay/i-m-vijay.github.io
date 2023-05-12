import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {Location,LocationStrategy,PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
    ] 
})
export class HeaderComponent implements OnInit {
  constructor( private route: ActivatedRoute, private router:Router, private location: Location ) { }
  public searchBtn:boolean=false;
  public homePage:boolean=true;
  public routeName: string = '';
  public showClass: boolean = false ;

  ngOnInit(): void {
    console.log('ghjgjgj',this.route.snapshot.params)
    console.log('sfs',this.router.url)
    this.routeName = 'sfsf' ;
  }

  // closeSearch() {
  //   this.searchBtn=false; 
  // }
  // openSearch(){
  //    this.searchBtn=true;
  // }

  isAdvancedRoute() {
    // console.log(this.location.path())
    this.showClass = this.location.path() !== '' ? true : false ;
    return true;
  }
}
