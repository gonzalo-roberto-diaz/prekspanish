import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { VideosComponent } from './videos/videos.component';
import { ArticlesComponent } from './articles/articles.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { OurLevelsComponent } from './home/our-levels/our-levels.component';
import { MakeHappenComponent } from './home/make-happen/make-happen.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { TeachingTechniquesComponent } from './articles/teaching-techniques/teaching-techniques.component';
import { CommonQuestionsComponent } from './articles/common-questions/common-questions.component';
import { SchoolExperiencesComponent } from './articles/school-experiences/school-experiences.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/teaching-techniques', component: TeachingTechniquesComponent },
  { path: 'articles/common-questions', component: CommonQuestionsComponent },
  { path: 'articles/high-school-experiences', component: SchoolExperiencesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    VideosComponent,
    ArticlesComponent,
    WelcomeComponent,
    AboutMeComponent,
    OurLevelsComponent,
    MakeHappenComponent,
    TestimonialComponent,
    TeachingTechniquesComponent,
    CommonQuestionsComponent,
    SchoolExperiencesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
