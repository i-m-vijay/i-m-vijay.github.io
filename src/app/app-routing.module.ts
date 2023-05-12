import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component'; 
import {BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'about', component:AboutComponent },
  { path: 'our-work', component:OurWorkComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'careers', component:CareersComponent },
  { path: 'blog-detail/:blogId', component:BlogDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
