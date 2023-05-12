import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { GetInTouchComponent } from './common/get-in-touch/get-in-touch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogPostComponent } from './common/posts/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GetInTouchComponent,
    TechnologiesComponent,
    AboutComponent,
    OurWorkComponent,
    ContactComponent,
    CareersComponent,
    BlogDetailComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
