import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  //http://localhost:4200/
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'course',
    component:CoursesComponent
  },

  {
    path: 'security',
    loadChildren: () => AuthModule
  },
  {
    path:'profile',
    component:ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
