import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    CourseCardComponent,
    CoursesComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
