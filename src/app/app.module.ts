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
import { TeachingTechniquesComponent } from './articles/teaching-techniques/teaching-techniques.component';
import { CommonQuestionsComponent } from './articles/common-questions/common-questions.component';
import { SchoolExperiencesComponent } from './articles/school-experiences/school-experiences.component';
import { VideoItemComponent } from './videos/video-item/video-item.component';


import {AnalyticsService} from "./services/analytics.service";

//to construct the "safe" directive, which will allow me to pass Youtube URL's  to the iframes
//https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-in-angular-2-without-causing-unsafe-value-exception/38037914#38037914
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/teaching-techniques', component: TeachingTechniquesComponent },
  { path: 'articles/common-questions', component: CommonQuestionsComponent },
  { path: 'articles/high-school-experiences', component: SchoolExperiencesComponent },
];

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

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
    TeachingTechniquesComponent,
    CommonQuestionsComponent,
    SchoolExperiencesComponent,
    VideoItemComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
